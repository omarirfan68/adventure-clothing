import firebaseConfig from "./Config";
import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc,collection ,writeBatch, query, getDocs} from "firebase/firestore";


const firebaseapp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const db = getFirestore();




export const AddcollectionAndDocument=async(collectionkey,objectstoadd)=>{
  const collectionref=collection(db,collectionkey)
  const batch=writeBatch(db)
  objectstoadd.forEach((object)=>{
    const docref = doc(collectionref,object.title.toLowerCase());
    batch.set(docref,object)
  });
  await batch.commit()
  console.log('done')

}
export const GetcollectionAndDocument = async()=>{
  const collectionref=collection(db,'categories')
  const q = query(collectionref)
  const querysnapshop = await getDocs(q)
  const categorymaps = querysnapshop.docs.reduce((acc,docsnapshot)=>{
    const {title,items}= docsnapshot.data();
    acc[title.toLowerCase()]=items
    return acc
  },{})
  return categorymaps
}

export const createuserwithdocument = async (userAuth) => {
  if (!userAuth) return
  const userdocref = doc(db, 'users', userAuth.uid);
  const snapshot = await getDoc(userdocref)
  if (!snapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userdocref, { displayName, email, createdAt })
    } catch (error) { console.log(error.message) }
  }

}

export const createuserwithEP = async (EMAIL, PASSWORD) => {
  if (!EMAIL || !PASSWORD)
    return;
  return await createUserWithEmailAndPassword(auth, EMAIL, PASSWORD)
}

export const SIGNINWITHEMAILANDPASSWORD = async (EMAIL, PASSWORD) => {
  if (!EMAIL || !PASSWORD)
    return;
  return await signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
}

export const SignoutUser = async () => await signOut(auth)

export const onAuthlistener = (callback) => {
  onAuthStateChanged(auth, callback)
}
