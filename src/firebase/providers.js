
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {
    
    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, uid, photoURL} = result.user
        

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error){
        const errorCode = error.errorCode
        const errorMessage = error.errorMessage
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredentials type that was used.
        const credentials = GoogleAuthProvider.credentialFromError(error)
        return{
            ok: false,
            errorMessage,
        }
    }
}