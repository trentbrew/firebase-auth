import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2GWHnQGJupYnrxvOgJbY7rNOIjIgbF-E",
    authDomain: "vue-auth-hbr-2020.firebaseapp.com",
    databaseURL: "https://vue-auth-hbr-2020.firebaseio.com",
    projectId: "vue-auth-hbr-2020",
    storageBucket: "vue-auth-hbr-2020.appspot.com",
    messagingSenderId: "1025659923891",
    appId: "1:1025659923891:web:a32ecfec5bc02c241aafc6"
};

firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}