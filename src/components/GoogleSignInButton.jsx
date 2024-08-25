// // src/components/GoogleSignInButton.jsx
// import React from 'react';
// import { auth, provider } from '../firebase.config'; // Adjust path as needed
// import { signInWithPopup } from 'firebase/auth';
// import { FaGoogle } from 'react-icons/fa';

// const GoogleSignInButton = () => {
//   const handleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       // Handle successful sign-in (e.g., redirect or show a success message)
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//       // Handle sign-in error
//     }
//   };

//   return (
//     <button
//       onClick={handleSignIn}
//       className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
//     >
//       <FaGoogle className="mr-2" size={20} />
//       Sign In with Google
//     </button>
//   );
// };

// export default GoogleSignInButton;
