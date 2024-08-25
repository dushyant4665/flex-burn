import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';

const provider = new GoogleAuthProvider();

const autoSignIn = () => {
  return new Promise((resolve, reject) => {
    let signInStarted = false;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('User already signed in:', user);
        resolve(user);
        unsubscribe();
      } else if (!signInStarted) {
        signInStarted = true;
        try {
          const result = await signInWithPopup(auth, provider);
          console.log('User signed in:', result.user);
          resolve(result.user);
        } catch (error) {
          console.error('Error during sign-in:', error);
          reject(error);
        } finally {
          unsubscribe();
        }
      }
    });
  });
};

export default autoSignIn;
