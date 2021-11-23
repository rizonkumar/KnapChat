import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD5GHGL-iIbyCklp60rL2neg4wfim1GESA",
    authDomain: "mychat-dc0f7.firebaseapp.com",
    projectId: "mychat-dc0f7",
    storageBucket: "mychat-dc0f7.appspot.com",
    messagingSenderId: "284071997508",
    appId: "1:284071997508:web:14c6fd1bf8e5d766584c11",
  })
  .auth();
