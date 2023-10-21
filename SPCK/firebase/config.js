import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyDjg1eRhMyn7Qictff7rTGfIvuWIOqNadA",
  authDomain: "abcdxy.firebaseapp.com",
  projectId: "abcdxy",
  storageBucket: "abcdxy.appspot.com",
  messagingSenderId: "882550398499",
  appId: "1:882550398499:web:0b7bd691ef041df6681b96",
  measurementId: "G-CMSNE34WXR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
