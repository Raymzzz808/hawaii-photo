import React,{useState} from 'react';
const infoHeadingCSS = "text-brand  text-3xl sm:text-5xl md:text-5xl uppercase font-bold font-poppins md:pr-4 pt-4 sm:pt-8";
const infoOtherCSS = "font-poppins text-sm sm:text-xl text-brand md:pr-2";

export default function Info({information}){
    return(<>   
        {information.map((info,idx)=>(
             <div key={idx} >
        <p className={infoHeadingCSS}>
            {info.name}</p>
            <p className={infoOtherCSS}><a href={`mailto: ${info.email}`}>{info.email}</a></p>
            <p className={infoOtherCSS}><a href={info.website.link}>{info.website.site}</a></p>
                </div>
        ))}
               </> )
}