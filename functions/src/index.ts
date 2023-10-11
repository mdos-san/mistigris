import * as admin from "firebase-admin";
import {initializeApp} from "firebase-admin/app";
import * as functions from "firebase-functions";

initializeApp();

export const registerUser = functions.region("europe-west1")
  .auth.user().onCreate((user) => {
    if (user.email === "mdossan@protonmail.com") {
      return admin.auth().setCustomUserClaims(user.uid, {isAdmin: true});
    }

    admin.firestore()
      .collection("users")
      .doc(user.uid)
      .set({creationDate: new Date().toISOString()});

    return;
  });
