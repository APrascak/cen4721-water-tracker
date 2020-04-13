<template>
    <div class="container">
        <h1 id="waterTracker"><router-link :to="{ name: 'Landing'}" tag="h1">Water Tracker</router-link></h1>
        <img src="../assets/logo.png">
        <h4>"70% of the brain is water..."</h4>
        <div id="navigation">
            <button class="btn" @click="sendToLoginPage()">Login</button>
            <button class="btn" @click="sendToSignupPage()">Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    data() {
        return {

        }
    },
    methods: {
        sendToSignupPage() {
            this.$router.push({ name: 'Signup' })
        },
        sendToLoginPage() {
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style lang="stylus">
 img {
     height: 200px;
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
</style>