import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,getMultiFactorResolver, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJTJ0rYWdfF-cB9i6FCb2HI904BskrXs",
  authDomain: "interview-abad0.firebaseapp.com",
  projectId: "interview-abad0",
  storageBucket: "interview-abad0.appspot.com",
  messagingSenderId: "545369746224",
  appId: "1:545369746224:web:d29c612bbefe16ac3376f5",
  measurementId: "G-ZZG03RBZLP"
};

// Initialize Firebase
//const auth = getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
const provider=new GoogleAuthProvider()