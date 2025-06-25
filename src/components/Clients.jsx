import React from 'react';
import {Fade,Slide} from 'react-awesome-reveal';
const clientList = ["Turning Art","NCIS:Hawaii", "HighGate", "REVEL","Kona DEEP","Oath-Verizon", "Coldwell Banker Pacific Properties","Hotshot Portraits"];
export default function Clients({clientLogos}){
    return (<> 
<div className="mx-auto flex flex-col items-center bg-brand justify-center sm:mt-20 mt-10 sm:p-4 p-0">
   <div className="my-8 flex flex-row items-start justify-around flex-wrap max-w-6xl">
     <Fade cascade triggerOnce duration={2000}>
      <h3 className="tracking-wider font-bold font-poppins uppercase text-5xl sm:mt-4 mt-2 text-white">
        Clients:
        </h3>
        </Fade>
        <div>
          <div className="flex flex-col max-w-xl border-l-4 border-brand rounded-2xl ">
            <ul className="sm:mt-0 mt-4">
              {clientList.map((client,id)=> (
                <Slide key={id} duration={2000} direction="right" cascade triggerOnce raction={0.4} damping={0.8}>
                  <li className="sm:text-xl sm:ml-8 font-lora text-center sm:text-left font-thin text-swiss tracking-widest leading-relaxed uppercase ">
                    {client}</li>
                    </Slide>
                  ))}
                   </ul>
                   </div>
                   </div>
                   </div>
                   </div>
                   </>
                   )}