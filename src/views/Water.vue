<template>
    <div class="container">
        <div id="title" class="row">
            <h2 id="waterTracker" @click="sendToLandingPage()"><img src="../assets/logo.png">Water Tracker</h2>
        </div>
        <div class="row">
            <h4>Current Total: 3 cups</h4>
        </div>
        <div class="row">
            <img id="waterMeasuringGlass" src="../assets/waterMeasuringGlass.png">
        </div>
        <div class="row">
            <div class="col l6 offset-l3">
                <h5>Please enter the amount and measurement you have consumed to add to your current total.</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col l2 offset-l4">
                <input placeholder="# Cups" type="number">
            </div>
            <div class="input-field col l2">
                <select name="" id="">
                    <option value="" disabled selected>Unit</option>
                    <option value="">Cups</option>
                    <option value="">Ounces</option>
                    <option value="">mL</option>
                </select>
                <label for="">Conversion Unit</label>
            </div>
            <div class="input-field col l1">
                <button class="btn"><i class="material-icons">arrow_forward</i></button>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'

export default {
    name: 'Water',
    data() {
        return {

        }
    },
    methods: {
        sendToLandingPage() {
            this.$router.push({ name: 'Landing' })
        }
    },
    mounted() {
        M.AutoInit()
    }
}
</script>

<style lang="stylus">
#waterTracker {
     font: 1em;
     cursor: pointer;
 }
 img {
     height: 1em;
 }
 #title {
     margin-top: 10%;
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