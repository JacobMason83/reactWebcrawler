import firebase from 'firebase/app'
import 'firebase/database'





const config = {
    apiKey: "AIzaSyBCLzv0LDtU2Qb4BhZMUfZdF3TmSBGsRXA",
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    // messagingSenderId: process.env.FIREBASE_PROJECT_NUMBER,
    appId: "1:901819406577:web:2392db5a2484ebcfe73150",
    databaseURL: `https://zillowscraper-40402-default-rtdb.firebaseio.com/`,
    
  }

  const initFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(config)
    }
  }
  initFirebase();

  var db = firebase.database();
  // const homeData = db.ref('https://zillowscraper-40402-default-rtdb.firebaseio.com')
  // function writeHomeData(data) {
    
  //   db.ref('properties/' + 'homeData').set({
  //    homeData : data
  //   });
  // }
  // writeHomeData(homeData) 
  export { firebase, db }