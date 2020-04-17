import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmJiuO4jIwgO3P3FiFwIkQfJ1aDiYgoTM",
    authDomain: "hci-water-tracker.firebaseapp.com",
    databaseURL: "https://hci-water-tracker.firebaseio.com",
    projectId: "hci-water-tracker",
    storageBucket: "hci-water-tracker.appspot.com",
    messagingSenderId: "341478640553",
    appId: "1:341478640553:web:45a5337e03fea36c3b52b8",
    measurementId: "G-3ZGGX1RB73"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export default firebaseApp.firestore()