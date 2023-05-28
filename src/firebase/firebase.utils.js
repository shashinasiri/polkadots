import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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


export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = doc(firestore, 'users', userAuth.uid);

const snapShot = await getDoc(userRef);

if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
    await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
    });
    console.log('User document created');
    } catch (error) {
    console.log('Error creating user', error.message);
    }
}

return userRef;
};

export default firebase;