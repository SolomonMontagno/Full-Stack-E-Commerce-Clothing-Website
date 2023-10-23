import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACFBOCxd-KlkL_S2xWX9e10662uN_XeGI",
  authDomain: "crwn-ecommerce-db-b576e.firebaseapp.com",
  projectId: "crwn-ecommerce-db-b576e",
  storageBucket: "crwn-ecommerce-db-b576e.appspot.com",
  messagingSenderId: "1066809239243",
  appId: "1:1066809239243:web:89018076b9cbb7339cdd4e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, additionalInformation = {}
  ) => {
  console.log("Inside createUserDocumentFromAuth");
  if (!userAuth) return console.error("User authentication is missing.");

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("User document reference:", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("User snapshot:", userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      console.log("User document created:", userDocRef.id);
    } catch (error) {
      console.error("Error creating the user document", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (userCredential) {
      console.log("User authenticated:", userCredential.user);
      return userCredential
    } else {
      console.error("User authentication failed. No user found.");
      return null;
    }
  } catch (error) {
    console.error("Error creating the user", error.code, error.message);
    return null; // Handle the error gracefully
  }
};
