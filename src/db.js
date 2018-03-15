//@ts-check

import { config } from "./config";
import firebase from "firebase";
let database, uid;
export const init = () => {
  firebase.initializeApp(config);
  database = firebase.database();
  firebase.auth().signInAnonymously();
};

export const save = participant => {
    uid = firebase.auth().currentUser.uid;
    database.ref(`participants/${uid}`).set(participant);
}