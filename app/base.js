import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCtuLJJtOBs_gRHRYu2FWM5k_BerjWrEsw",
  authDomain: "formerselves-ec109.firebaseapp.com",
  databaseURL: "https://formerselves-ec109.firebaseio.com",
});
const base = Rebase.createClass(app.database());

export default base;