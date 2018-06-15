import Rebase from 're-base';
import firebase from 'firebase';


const app = firebase.initializeApp({
  apiKey: "AIzaSyAZw_z4w_1ohz1SGuwOqk1nAlWHn4QhJMs",
  authDomain: "lulu-bug.firebaseapp.com",
  databaseURL: "https://lulu-bug.firebaseio.com"
});

export const rebase = Rebase.createClass(app.database());

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const user = firebase.auth().currentUser;