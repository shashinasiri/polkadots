import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDkdQFe90XROEkvSvTjJ4_FWcnikiPDQi0",
    authDomain: "polkadots-25341.firebaseapp.com",
    projectId: "polkadots-25341",
    storageBucket: "polkadots-25341.appspot.com",
    messagingSenderId: "326841066523",
    appId: "1:326841066523:web:1531fdef9280f6b1c704be"
  };

const firebase = initializeApp(config);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
signInWithRedirect(auth, provider);
};

export default firebase;