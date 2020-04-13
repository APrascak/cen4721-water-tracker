<template>
    <div class="container">
        <h1 id="waterTracker"><router-link :to="{ name: 'Landing'}" tag="h1">Water Tracker</router-link></h1>
        <img src="../assets/logo.png">
        <div class="row">
            <div class="input-field col l4 offset-l4">
                <input placeholder="Email" id="email" type="email" class="validate">
            </div>
            <div class="input-field col l4 offset-l4">
                <input placeholder="Password" id="password" type="password" class="validate">
            </div>
            <button class="btn col l2 offset-l5">Create Account</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            
        }
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