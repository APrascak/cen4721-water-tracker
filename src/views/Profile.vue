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
                <h6 class="clickable" @click="sendToWaterPage()">Daily Intake</h6>
            </div>
        </div>
        <div class="row show-on-medium-and-up hide-on-small-only">
            <div id="dailyConsumptionTable"></div>
        </div>
        <div class="row show-on-small hide-on-med-and-up">
            <div id="dailyConsumptionTable-Mobile"></div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import ApexCharts from 'apexcharts'

export default {
    name: 'Profile',
    data() {
        return {
            user: null
        }
    },
    methods: {
        sendToLandingPage() {
            this.$router.push({ name: 'Landing' })
        },
        signOut() {
            firebase.auth().signOut()
            .then(() => {
                this.$router.push({ name: 'Landing' })
            })
        },
        sendToWaterPage() {
            this.$router.push({ name: 'Water' })
        }
    },
    mounted() {
        var title = 'Daily Consumpion: ' + this.user.email
        var waterOptions = {
        title: {
          text: title,
          align: 'center',
          style: {
            fontSize: '24px',
            color: '#2c3e50'
          }
        },
        chart: {
          type: 'line'
        },
        series: [
          {
            name: 'Last Week',
            data: [10, 8, 7, 11, 14, 9, 12]
          },
          {
            name: 'This Week',
            data: [11, 12, 9, 4]
          }
        ],
        yaxis: {
          min: 0,
          max: 20,
        },
        xaxis: {
          categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
      }
      var dailyConsumptionChart = new ApexCharts(document.querySelector('#dailyConsumptionTable'), waterOptions)
      dailyConsumptionChart.render()

      var waterOptionsMobile = {
        title: {
          text: title,
          align: 'center',
          style: {
            fontSize: '12px',
            color: '#2c3e50'
          }
        },
        chart: {
          type: 'line',
          height: '500px;'
        },
        series: [
          {
            name: 'Last Week',
            data: [10, 8, 7, 11, 14, 9, 12]
          },
          {
            name: 'This Week',
            data: [11, 12, 9, 4]
          }
        ],
        yaxis: {
          min: 0,
          max: 20,
        },
        xaxis: {
          categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
      }
      var dailyConsumptionChartMobile = new ApexCharts(document.querySelector('#dailyConsumptionTable-Mobile'), waterOptionsMobile)
      dailyConsumptionChartMobile.render()
    },
    created() {
        this.user = firebase.auth().currentUser
        console.log(this.user)
    }
}
</script>

<style lang="stylus" scoped>
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
</style>