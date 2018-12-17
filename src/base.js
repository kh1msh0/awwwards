
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvkds_n7snsZG7XzAu_4lDMR8NAe8j9ho",
    authDomain: "awardsredfork.firebaseapp.com",
    databaseURL: "https://awardsredfork.firebaseio.com"
  });


const base= Rebase.createClass(firebaseApp.database())

export{firebaseApp};

export default base;

