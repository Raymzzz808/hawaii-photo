import React from 'react';
import {Slide} from 'react-awesome-reveal';

export default function Exhibitions({exhibitions}){
    const publications = exhibitions.sort((a,b) => b.year.toString().localeCompare(a.year.toString()));
    return (
    <div className="bg-white w-screen mt-8 py-4 sm:px-8 mb-8 ">
    <Slide fraction={0.4} direction="left" damping={0.4} cascade triggerOnce>
        <ul className="sm:p-4 p-6">
        <h2 className="text-brand flex flex-col sm:text-5xl text-4xl flex-wrap font-poppins font-bold uppercase"> Exhibitions Publications:</h2>
        {publications.map((items,index)=>(
            <li key={index} className="mt-4">
                <p className="text-slate-400 font-thin text-2xl mt-4 font-lora">
                    {items.year}:</p>
            <ul>
                <li>{items.entries.map((show,idx)=>(
                    <ul key={idx}>
                        <Slide fraction={0.4} direction="left" damping={0.4} cascade triggerOnce>
                    <li className="sm:text-xl font-lora leading-relaxed sm:tracking-wide tracking-normal" key={idx}>
                        {show}</li>
                        </Slide></ul>
                ))}</li>
                </ul></li>
        ))}
        </ul>
        </Slide>
    </div>
    )
}