import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import FooterDetails from './components/FooterDetails';
import { search } from './assets/images';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from './firebase.config.js'; // Import the auth instance from your config file

function App() {
  const [user, setUser] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');

  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Update the state with user info
      // toast.success('Successfully Signed In');
    } catch (error) {
      console.error('Error signing in:', error);
      // toast.error('Sign In Failed');
    }
  };

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    const newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    window.location.href = '#workout';
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base relative'>
    <div className='flex flex-col sm:flex-row items-center justify-between p-4 absolute top-0 inset-x-0'>
        {/* Sign-in Button */}
        {!user && (
          <div
            onClick={handleLogin}
            className="text-base w-full sm:w-52 md:w-60 h-12 tracking-wide border-[1px] border-gray-600 rounded-md flex items-center gap-2 hover:border-blue-600 cursor-pointer duration-300 justify-center mb-4 sm:mb-0"
          >
            <img
              className="w-6"
              src={search}
              alt="Google Logo"
            />
            <p className="text-md text-white">Sign in with Google</p>
          </div>
        )}
        {/* User Profile Section */}
        {user && (
          <div className='flex items-center space-x-4'>
            <img
              className='w-8 h-8 rounded-full'
              src={user?.photoURL || 'https://th.bing.com/th/id/R.fcecc3d00a96586827936b2f8f1f50ac?rik=K638ymGAiMeDnw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_FOdSivHbN8%2fVkVpjalJSkI%2fAAAAAAAAJVY%2fMeyTOgjzbFA%2fs1600%2fRG_02A.jpg&ehk=mwoty5KvexLblrWX1Nq79Yrm4JtOrvQNJqJreeH1ET0%3d&risl=&pid=ImgRaw&r=0'}
              alt='User Profile'
            />
            <h1 className='text-lg sm:text-xl'>Welcome, {user.displayName}</h1>
          </div>
        )}
      </div>

      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
      <FooterDetails />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       />
    </main>
  );
}

export default App;
