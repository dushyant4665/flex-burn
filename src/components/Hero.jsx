import React from 'react';
import Button from './Button';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white">
            <div className="flex flex-col gap-4">
                <p className="text-lg tracking-widest text-gray-400">IT'S TIME TO GET</p>
                <h1 className="uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                    IN<span className="text-blue-500">SHAPE</span>
                </h1>
            </div>
            <p className="text-sm md:text-base font-light max-w-[700px]">
                I accept that I might grow into a formidable <span className="text-blue-500 font-medium">force of muscle and strength</span>, 
                and with it, embrace the shadows of body dysmorphia and the struggle to fit into everyday spaces. 
                <span className="text-blue-500 font-medium"> I’m ready to face these challenges </span> 
                and the impact they might have on how I see myself.
            </p>
            <Button 
                func={() => { window.location.href = '#generate'; }} 
                text={"Accept & Begin"} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
        </div>
    );
}
