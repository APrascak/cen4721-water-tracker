<template>
    <div class="container">
        <h1 id="waterTracker"><router-link :to="{ name: 'Landing'}" tag="h1">Water Tracker</router-link></h1>
        <img src="../assets/logo.png">
        <div class="row" v-if="feedback">
            <p class="red-text">{{ feedback }}</p>
        </div>
        <div class="row">
            <div class="input-field col l4 offset-l4">
                <input placeholder="Email" name="email" type="email" class="validate" v-model="email">
            </div>
            <div class="input-field col l4 offset-l4">
                <input placeholder="Password" name="password" type="password" class="validate" v-model="password">
            </div>
            <div class="input-field col l4 offset-l4">
                <input placeholder="Confirm Password" name="confirmPassword" type="password" class="validate" v-model="confirmedPassword">
            </div>
            <button class="btn col l2 offset-l5" @click="signup()">Create Account</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebase/init'

export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            password: null,
            confirmedPassword: null,
            feedback: null
        }
    },
    methods: {
        signup() {
            if (this.password == this.confirmedPassword) console.log("Passwords are equal.")

            if (this.email && this.password && (this.password == this.confirmedPassword)) {
                let ref = db.collection('users').doc(this.email)
                console.log(ref)
                ref.get().then(doc => {
                    if (doc.exists) {
                        this.feedback = "This account is already in use"
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then(cred => {
                            ref.set({
                                user_id: cred.user.uid,
                                user_email: cred.user.email,
                                dailyWaterConsumption: 0
                            })
                        })
                        .then(() => {
                            this.$router.push({ name: 'Water' })
                        })
                        .catch((err) => {
                            this.feedback = err.message
                        })
                    }
                })
            }
        }
    },
    created() {
        console.log("Loading Signup page...")
    }
}
</script>

<style lang="stylus">
 img {
     height: 200px;
 }
 .input-field {
     margin-top: 0%;
 }
 #waterTracker {
     margin-top: 10%;
     font: 1em;
     cursor: pointer;
 }
 .btn {
     background-color: #62afcd;
     margin-left: 1%;
     margin-right: 1%;
 }
 #navigation {
     margin-top: 1.5%;
 }
 ::-webkit-input-placeholder {
    color:    black;
     opacity: 1 !important;
}
.btn:hover {
  background-color: #01579b;
}
.btn:active {
  background-color: #4dd0e1;
}
.btn:visited {
    background-color: #01579b;
}
</style>