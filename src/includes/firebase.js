import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAr9GltTxDXqQJd3cSz742sZlx7H4jhOIg',
  authDomain: 'music-7c374.firebaseapp.com',
  projectId: 'music-7c374',
  storageBucket: 'music-7c374.appspot.com',
  appId: '1:789376783063:web:f00d9f8f1371197a0ed692',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
