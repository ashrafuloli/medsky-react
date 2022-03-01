import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import firebaseInit from "../firebase/firebase.init";

firebaseInit();

const useFirebase = () => {
    const auth = getAuth();

    const providerGoogle = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const status = {
                    code: error.code,
                    message: error.message,
                }
                console.log(status);
            })
    }

    return {
        signInWithGoogle
    }
}

export default useFirebase;
