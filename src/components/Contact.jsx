import React from 'react';

export default function Contact({email,phone}){
    return (
        <>
        <div className="flex flex-row flex-wrap w-full gap-4 justify-evenly items-center bg-brand p-8 mt-4 rounded-lg">
                <h2 className="text-swiss text-2xl sm:text-4xl font-thin font-poppins w-full py-2 text-center tracking-widest uppercase border-4 rounded-lg mb-4 sm:mb-10 border-swiss">Contact Us:</h2>
           <a href="mailto:info@raymondenriquez.com" className="hover:invert hover:cursor-pointer hover:brightness-0 hover:cyan hover:hue-rotate-200 hover:saturate-200 hover:contrast-150">
            <img src={email} className="duration-300 ease-in-out h-10 w-10 sm:h-20 sm:w-20 hover:h-24 hover:w-24  hover:cursor-pointer hover:brightness-0 hover:cyan hover:hue-rotate-200 hover:saturate-200 hover:contrast-150"/>
           </a>
        
            <a href="tel:8082077587"> 
                <img src={phone} className="duration-300 ease-in-out h-10 w-10 sm:h-20 sm:w-20 hover:h-24 hover:w-24"/>
                </a>
                </div></>
    )
}