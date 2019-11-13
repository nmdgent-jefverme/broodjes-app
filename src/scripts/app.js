import '../styles/login.css';
import '../styles/main.css';
import Firebase from './Firebase';

const btnLoginGoogle = document.getElementById('btnLoginGoogle');
const btnLogout = document.getElementById('btnLogout');

const initApp = async () => {
  Firebase.isLogedIn();
};

initApp();

btnLoginGoogle.addEventListener('click', (e) => {
  e.preventDefault();
  Firebase.loginWithGoogle();
});
btnLogout.addEventListener('click', (e) => {
  e.preventDefault();
  Firebase.logout();
});
