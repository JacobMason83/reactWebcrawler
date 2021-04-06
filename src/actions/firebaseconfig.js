import firebase from 'firebase/app'
import 'firebase/database'



const config = {
    apiKey: "AIzaSyBCLzv0LDtU2Qb4BhZMUfZdF3TmSBGsRXA",
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_PROJECT_NUMBER,
    appId: "1:901819406577:web:2392db5a2484ebcfe73150",
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com/`,
    measurementId: "G-G2KQ0GLM6N"
  }

  const initFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(config)
    }
  }
  initFirebase();

  var database = firebase.database()
  export { firebase }