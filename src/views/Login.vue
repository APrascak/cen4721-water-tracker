<template>
    <div class="container">
        <h1 id="waterTracker"><router-link :to="{ name: 'Landing'}" tag="h1">Water Tracker</router-link></h1>
        <img src="../assets/logo.png">
        <div class="row" v-if="feedback">
            <p class="red-text">{{ feedback }}</p>
        </div>
        <div class="row">
            <div class="input-field col s12 l4 offset-l4">
                <input placeholder="Email" id="email" type="email" class="validate" v-model="email">
            </div>
            <div class="input-field col s12 l4 offset-l4">
                <input placeholder="Password" id="password" type="password" class="validate" v-model="password">
            </div>
            <button class="btn col s8 l2 offset-s2 offset-l5" @click="login">Login</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import '../firebase/init'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login() {
            console.log(this.user)
            console.log(this.email)
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    console.log(user)
                    this.$router.push({ name: 'Water' })
                })
                .catch((err) => {
                    this.feedback = err.message
                })
            }
        }
    },
    mounted() {
        if (firebase.auth().currentUser != null) {
            this.$router.push({ name: 'Profile' })
        }
    },
    created() {

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