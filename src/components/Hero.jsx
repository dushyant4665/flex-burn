import React from 'react'
import Button from './Button'


export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>IN<span className='text-blue-400'>SHAPE</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>  I accept that I might grow into a formidable <span className='text-blue-400 font-medium'>force of muscle and strength,</span>  and with it, embrace the shadows of body dysmorphia and the struggle to fit into everyday spaces. <span className='text-blue-400 font-medium'>I’m ready to face these challenges </span>and the impact they might have on how I see myself.</p>
          
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
           
        </div>
    )
}
