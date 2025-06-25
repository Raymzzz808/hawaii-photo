import swissLogo from '../assets/swissLogo.png';
import React from 'react';
import {Fade} from 'react-awesome-reveal';
export default function Cover({coverImage,coverCopy,coverClass,coverHeading, coverContent}) {
    return (
        <div className="w-screen">
    
                <div
                className={`flex w-screen bg-cover bg-center bg-no-repeat h-[20rem] sm:h-[24rem] ${coverClass}`}
                style={{
                backgroundImage: `url(${coverImage})`
            }}>
                <section className="w-screen items-center text-center justify-center flex-col flex">
                    {coverHeading || coverContent && 
                   (<>
                   <h2>{coverHeading}</h2>
                    <h3>{coverContent}</h3>
                   </> 
                )}
                        <Fade duration={8000} cascade triggerOnce>
                    <img className="w-[15rem] sm:block hidden" src={swissLogo}/>
                        </Fade>
                    {coverCopy && <h2 className=" bg-box sm:bg-transparent rounded-lg py-8 m-4 px-8 sm:py-0 text-lg sm:text-xl italic text-stone-200 flex font-bold font-lora animate-character">
                            {coverCopy}
                            </h2>}
                </section>
            </div>
        </div>
    )
}