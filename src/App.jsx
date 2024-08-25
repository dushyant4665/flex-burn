import React, { useState, useEffect } from 'react';
// import SignInPopup from './components/SignInPopup';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import autoSignIn from './auth'; // Assume you have this function
import { generateWorkout } from './utils/functions';
import FooterDetails from './components/FooterDetails';
// import AuthModal from './components/AuthModal';

function App() {
  const [user, setUser] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');
  const [showPopup, setShowPopup] = useState(true);


  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    autoSignIn()
      .then((user) => {
        setUser(user);
        setShowPopup(false);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  }, []);

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    const newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    window.location.href = '#workout';
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
       {user ? (
    <div className='flex items-center space-x-4 p-4'>
      <img
        className='w-8 h-8 rounded-full'
        src={user?.image || 'https://th.bing.com/th/id/R.fcecc3d00a96586827936b2f8f1f50ac?rik=K638ymGAiMeDnw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_FOdSivHbN8%2fVkVpjalJSkI%2fAAAAAAAAJVY%2fMeyTOgjzbFA%2fs1600%2fRG_02A.jpg&ehk=mwoty5KvexLblrWX1Nq79Yrm4JtOrvQNJqJreeH1ET0%3d&risl=&pid=ImgRaw&r=0'}
        alt='user profile'
      />
      <h1 className='text-lg sm:text-xl'>Welcome, {user.displayName}</h1>
      
    </div>
  ) : (
    <h1 className='p-4'>Please sign in</h1>
  )}
      
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
      {workout && (<Workout workout={workout} />)}
      <FooterDetails/>
    </main>
  );
}

export default App;
