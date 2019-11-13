/**
 * Import files and functions
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const loginZone = document.getElementById('loginZone');
const logoutZone = document.getElementById('logoutZone');
/**
 * The Firebase Class
 */
class Firebase {
  /**
   * Initializes firebase with correct information
   */
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAOz6zdz8-XlB4D5fsyzpkoqdwIbHPRsyE',
      databaseURL: 'https://broodjes-app.firebaseio.com',
      storageBucket: 'broodjes-app.appspot.com',
      authDomain: 'broodjes-app.firebaseapp.com',
      messagingSenderId: '175089932857',
      projectId: 'broodjes-app',
    });
    this.db = firebase.firestore();
    // firebase.auth().createUserWithEmailAndPassword('test@test.com', 'Azerty123');
  }

  /**
   * Function to login with email and password
   * @param  {} email email for authentication
   * @param  {} pwd password for authentication
   */
  loginWithPassword(email, pwd) {
    firebase.auth().signInWithEmailAndPassword(email, pwd);
  }

  /**
   * Function to login with google
   */
  loginWithGoogle() {
    // choose provider we want to use
    const provider = new firebase.auth.GoogleAuthProvider();
    // sign in with given provider
    firebase.auth().signInWithPopup(provider);
  }

  /**
   * Function to logout
   */
  logout() {
    firebase.auth().signOut();
  }

  /**
   * Checks if the user is allready logged in
   */
  isLogedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      // if logged in display the app
      if (user) {
        console.log('logged in');
        loginZone.className = 'hidden';
        logoutZone.className = 'displayed';
      } else /* if not logged in display the loginzone */ {
        console.log('logged out');
        loginZone.className = 'displayed';
        logoutZone.className = 'hidden';
      }
    });
  }

  /**
   * @TODO push correct values in array
   * Fetch users from Firebase
   * returns array of profiles
   */
  async getUsers() {
    const users = this.db.collection('users');
    const userArray = [];

    /**
     * @TODO Fetch users and push them in an array.
     * The problem now is that they are sotred in the array but not correct
     */
    users.get().then((profiles) => {
      profiles.forEach((doc) => {
        userArray.push(doc.data());
      });
    });
    return userArray;
  }

  /**
   * Upload the users in Firebase
   * @param {} data that needs to be uploaded
   * @TODO implement in the app correctly
   */
  uploadUsers(data) {
    data.forEach((element) => {
      this.db.collection('users').doc().set({
        age: element.age,
        id: element.id,
        like: null,
        location: element.location,
        name: element.name,
        picture: element.picture,
      });
    });
  }
}

// Create instance of Firebase class
export default new Firebase();
