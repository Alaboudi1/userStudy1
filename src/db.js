//@ts-check

import { config } from "./config";
import firebase from "firebase";
let database, uid;
export const init = () => {
  firebase.initializeApp(config);
  database = firebase.database();
  return firebase.auth().signInAnonymously().then(()=>{
      uid = firebase.auth().currentUser.uid;
      return database.ref(`test/participants/${uid}`).once('value')
  });
};

export const save = participant => {
    database.ref(`test/participants/${uid}`).set(participant);
}