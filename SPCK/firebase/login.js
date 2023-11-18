import { auth } from './config.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const emailElm = document.getElementById('email')
const passwordElm = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')

const handleLogin = () => {
    const email = emailElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Dang nhap thanh cong')
            window.location = '../home.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        });
}

loginBtn.addEventListener('click', handleLogin)