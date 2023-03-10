// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5QeaYe4BbPaMyaXqKxe7fCLMRHK1mwKM",
  authDomain: "anhel-project.firebaseapp.com",
  databaseURL: "https://anhel-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anhel-project",
  storageBucket: "anhel-project.appspot.com",
  messagingSenderId: "117471207738",
  appId: "1:117471207738:web:1cdfa6acd4484bf1ce7003"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


login.addEventListener('click',(e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database, 'users/'+ user.vid),{
        last_login: dt,
    
    })
    alert('User loged in!')
    window.location.href = 'http://127.0.0.1:5500/index2.html';

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
    
});