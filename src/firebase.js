import firebase from "firebase";
// import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDLLFAN3443-Eksy32-YWx0e6ph2BHKha0",
	authDomain: "desniy-60b42.firebaseapp.com",
	projectId: "desniy-60b42",
	storageBucket: "desniy-60b42.appspot.com",
	messagingSenderId: "540274830206",
	appId: "1:540274830206:web:1cd5bf1c58c8a99a4da12f"
 };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
