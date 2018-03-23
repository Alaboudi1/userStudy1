//@ts-check

import { config } from "./config";
import firebase from "firebase";
let database, uid;
export const init = () => {
  firebase.initializeApp(config);
  database = firebase.database();
  return firebase.auth().signInAnonymously().then(()=>{
      uid = firebase.auth().currentUser.uid;
      return database.ref(`participants/${uid}`).once('value')
  });
};

export const save = participant => {
    database.ref(`participants/${uid}`).set(participant);
}
export const getTaskAssignment = () => {
    return database.ref(`random`).once('value')
}
export const setTaskAssignment = (random) => {
    return database.ref(`random`).set(random);
}