export function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA_CkIgswx9DClgDI6UbWJ8JBH2j8Qndbw",
    authDomain: "househub-ba60c.firebaseapp.com",
    projectId: "househub-ba60c",
    storageBucket: "househub-ba60c.appspot.com",
    messagingSenderId: "799328107995",
    appId: "1:799328107995:web:5d469a48ed60a0e479fbfe"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  return { auth, db, provider };
}
