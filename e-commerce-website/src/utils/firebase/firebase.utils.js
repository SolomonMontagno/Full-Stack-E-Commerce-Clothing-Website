import { initializeApp } from 'firebase/app'  
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

const provider = new GoogleAuthProvider()

provider.getCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  } catch (error) {
    console.log('error creating the user', error.message)
  }
  }

  return userDocRef
}