<template>
    <div class="container">
        <div id="title" class="row">
            <h2 class="clickable" @click="sendToLandingPage()"><img src="../assets/logo.png">Water Tracker</h2>
        </div>
        <div class="row">
            <div class="col s3 l2 offset-s3 offset-l4">
                <h6 class="clickable" @click="signOut()">Signout</h6>
            </div>
            <div class="col s3 l2">
                <h6 class="clickable" @click="sendToProfilePage()">Profile</h6>
            </div>
        </div>
        <div class="row">
            <h4>Current Total: {{ dailyConsumption }} cups</h4>
        </div>
        <div class="row">
            <img id="waterMeasuringGlass" src="../assets/waterMeasuringGlass.png">
        </div>
        <div class="row">
            <div class="col l6 offset-l3">
                <h5>Please enter the amount and measurement you have consumed to add to your current total.</h5>
            </div>
        </div>
        <div class="row red-text" v-if="feedback">
            <p>{{ feedback }}</p>
        </div>
        <div class="row green-text" v-if="success">
            <p>{{ success }}</p>
        </div>
        <div class="row">
            <div class="input-field col s12 l2 offset-l4">
                <input placeholder="# Cups" type="number" v-model="unconvertedAmountToAdd">
            </div>
            <div class="input-field col s12 l2">
                <select name="" id="" v-model="conversionUnit">
                    <option value="null" disabled selected>Unit</option>
                    <option value="Cup">Cups</option>
                    <option value="Ounce">Ounces</option>
                    <option value="mL">mL</option>
                </select>
                <label for="">Conversion Unit</label>
            </div>
            <div class="input-field col s4 l1 offset-s4">
                <button class="btn" @click="updateDailyConsumption()"><i class="material-icons">arrow_forward</i></button>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import firebase from 'firebase'
import db from '../firebase/init'

export default {
    name: 'Water',
    data() {
        return {
            conversionUnit: null,
            dailyConsumption: 0,
            feedback: null,
            unconvertedAmountToAdd: null,
            success: null
        }
    },
    methods: {
        conversionRate(unit) {
            if (unit == 'Cup') return 1
            if (unit == 'Ounce') return 0.125
            if (unit == 'mL') return 0.00422675
        },
        convertToCups(amount, unit) {
            return amount * this.conversionRate(unit)
        },
        updateDailyConsumption() {
            if (!this.validInput()) return
            let convertedAmount = this.convertToCups(this.unconvertedAmountToAdd, this.conversionUnit)
            this.updateUserWater(convertedAmount)
        },
        sendToLandingPage() {
            this.$router.push({ name: 'Landing' })
        },
        signOut() {
            firebase.auth().signOut()
            .then(() => {
                this.$router.push({ name: 'Landing' })
            })
        },
        sendToProfilePage() {
            this.$router.push({ name: 'Profile' })
        },
        updateUserWater(amountIncrease) {
            let ref = db.collection('users').doc(firebase.auth().currentUser.email)
            ref.get().then(doc => {
                let total = doc.data().dailyWaterConsumption + amountIncrease
                if (total < 0) {
                    this.feedback = "Must have positive amount of water."
                    return
                }
                ref.update({
                    dailyWaterConsumption: total
                }).then(() => {
                    this.dailyConsumption = total
                    this.feedback = null
                    this.success = "Successfully added " + amountIncrease + " cups of water!"
                })
            })
        },
        validInput() {
            if (this.conversionUnit == null) {
                this.feedback = "Please select a unit."
                return false
            }
            return true
        }
    },
    mounted() {
        M.AutoInit()

        let ref = db.collection('users').doc(firebase.auth().currentUser.email)
        ref.get().then(doc => {
            this.dailyConsumption = doc.data().dailyWaterConsumption
        })

    }
}
</script>

<style lang="stylus">
.clickable {
     font: 1em;
     cursor: pointer;
 }
 img {
     height: 1em;
 }
 #title {
     margin-top: 10%;
     margin-bottom: 0%;
 }
 #waterMeasuringGlass {
     height: 10em;
 }
 ::-webkit-input-placeholder {
    color:    black;
     opacity: 1 !important;
 }
 button {
     width: 100%;
 }
 .btn {
     background-color: #62afcd;
     margin-left: 1%;
     margin-right: 1%;
 }
</style>