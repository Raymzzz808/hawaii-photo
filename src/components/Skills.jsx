import React from 'react';
const subHeadingCSS = "text-brand/80 text-2xl sm:text-3xl md:text-2xl font-bold text-lora leading-relaxed";
const progressDivCSS = "w-1/2 h-8 mb-4";
const progressBarCSS ="h-full bg-brand rounded-sm flex flex-row items-center";
const experienceText = "font-poppins text-white text-sm md:text-lg sm:text-xl font-bold px-2";
export default function Skills({skill,experience}){
    return(
        <div> 
            <p className={subHeadingCSS}>{skill}</p>            
            <div className={progressDivCSS}>
            <div className={progressBarCSS}
            style={{ width: `${Math.floor(experience * 10)}%` }}>
                <p className={experienceText}>{experience} Years </p>
                </div>            
            </div>
            </div>
    )
}