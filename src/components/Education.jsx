import React from 'react'; 
const eduDivCSS= "mb-4 sm:tracking-tight tracking-normal leading-tight";
const schoolCSS = "text-brand/80 text-lg md:text-xl sm:text-xl font-bold text-lora md:pr-2";
const eduDetails = "font-lora text-md sm:text-xl font-bold relative sm:-top-0 md:-top-0 -top-2";
const eduDate = "sm:text-lg text-sm font-bold italic sm:-top-2 -top-3 md:-top-1 relative";

export default function Education({degree,school, gradYear}){
return (
    {section.content.map((edu, eduIDX) => (
                <div key={eduIDX} className={eduDivCSS}>
                 <p className={schoolCSS}>{degree}</p>
                  <p className={eduDetails}>{school}</p>
                  <p className={eduDate}>{gradYear}</p>
                </div>
              ))}
)
}