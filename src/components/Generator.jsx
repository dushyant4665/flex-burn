import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Button from './Button';

function Header({ index, title, description }) {
    return (
        <div className="flex flex-col gap-2 text-center">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 tracking-wider">{index}</p>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-100">{title}</h4>
            </div>
            <p className="text-sm sm:text-base text-slate-300">{description}</p>
        </div>
    );
}

export default function Generator({ muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const updateMuscles = (muscleGroup) => {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup));
        } else if (muscles.length < 3 || poison !== 'individual') {
            setMuscles(poison !== 'individual' ? [muscleGroup] : [...muscles, muscleGroup]);
            if (poison !== 'individual' || muscles.length === 2) setShowModal(false);
        }
    };

    return (
        <SectionWrapper id="generate" header="Generate Your Workout" title={['It\'s', 'Never', 'Too Late']}>
            <Header index="01" title="Pick Your Workout" description="Choose the type of workout you want." />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((type, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setMuscles([]);
                            setPoison(type);
                        }}
                        className={`bg-slate-950 border duration-300 ease-in-out px-4 py-3 rounded-lg transform transition-transform hover:scale-105 ${type === poison ? 'border-blue-500' : 'border-slate-700'} hover:border-blue-500`}
                    >
                        <p className="capitalize text-slate-100">{type.replaceAll('_', ' ')}</p>
                    </button>
                ))}
            </div>

            <Header index="02" title="Select Muscles" description="Choose the muscle groups you want to target." />
<div className="bg-slate-950 border border-slate-800 rounded-lg flex flex-col text-slate-100 shadow-lg">
    <button 
        onClick={toggleModal} 
        className="relative p-3 flex items-center justify-between hover:bg-blue-700 hover:text-white rounded-t-lg transition-all duration-300 ease-in-out transform hover:scale-100"
    >
        <p className="capitalize text-lg">{muscles.length === 0 ? 'Select Muscle Groups' : muscles.join(', ')}</p>
        <i className="fa-solid fa-caret-down text-xl transform transition-transform duration-300 ease-in-out"></i>
    </button>
    {showModal && (
        <div className="flex flex-col px-4 py-3 bg-slate-800 rounded-b-lg border-t border-slate-700">
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, index) => (
                <button
                    key={index}
                    onClick={() => updateMuscles(muscleGroup)}
                    className={`py-2 hover:text-blue-500 hover:bg-slate-900 rounded-md duration-200 transition-colors ease-in-out text-left px-3 ${
                        muscles.includes(muscleGroup) ? 'text-blue-500' : 'text-slate-300'
                    }`}
                >
                    <p className="uppercase text-sm tracking-wide">{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
            ))}
        </div>
    )}
</div>

<Header index="03" title="Set Your Goal" description="Choose what you want to achieve." />
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {Object.keys(SCHEMES).map((scheme, index) => (
        <button
            key={index}
            onClick={() => setGoal(scheme)}
            className={`bg-slate-950 border-2 px-5 py-4 rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105 
            ${scheme === goal ? 'border-blue-500 shadow-blue-500/50 shadow-lg' : 'border-slate-700'} hover:border-blue-500`}
        >
            <p className="capitalize text-lg text-slate-100 tracking-wider">{scheme.replaceAll('_', ' ')}</p>
        </button>
    ))}
</div>

<Button
    func={updateWorkout}
    text="Generate Workout"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 mt-8"
    />
      </SectionWrapper>
    );
}
