import React from 'react';
import { resumeData } from './ProData';
const sectionDivCSS = "p-2 flex flex-col flex-shrink-0"
const sectionHeadingCSS = "sm:text-6xl text-4xl uppercase font-bold font-poppins text-brand mt-4"
const titleCSS = "sm:text-4xl font-bold text-brand font-poppins mt-8";
const detailsCSS ="px-2 font-lora sm:text-xl tracking-tight";
const companyInfoCSS= "text-brand/90 text-lora sm:text-xl font-semibold leading-relaxed tracking-tight";
const companyDateCSS= "text-brand/90 font-poppins font-thin sm:text-lg italic leading-relaxed tracking-tight";
const otherCSS = "sm:text-xl font-lora tracking-tight";
const eduSchoolCSS = "mt-4 font-bold font-lora text-2xl";
const eduOtherCSS ="sm:text-xl italic text-brand " 
export default function Resume(){
    const divider = <div className="h-2 bg-brand/60 mb-8 mt-8"></div> ; 
    return (
    <div className="bg-white max-w-[80rem] flex-col flex flex-shrink-0 sm:p-8 p-2 rounded-xs my-10">
        {resumeData.map((section,sectionIDX)=>(
            <div key={sectionIDX}>

                {section.section !== "Professional Summary" ? (<>{divider}</>) : ""}
                <h2 className={sectionHeadingCSS}>{section.section}</h2>
                 


                <div>
                    {section.section !== "Education" ? 
                    ( <div className={sectionDivCSS}>
                        {section.section === "Professional Experience" ?
                        (section.items.map((item,itemIDX)=> (
                            <div key={itemIDX}>
                                <div className="border-l-4 border-brand/60 px-4 mb-2">
                            <p className={titleCSS}>{item.title}</p>
                            <p className={companyInfoCSS}>{item.company} - {item.location}</p>
                            <p className={companyDateCSS}>{item.dates}</p>
                                </div>
                                <div>
                                    {item.details && item.details.map((detail,idXd)=>(
                                    <p key={idXd} className={detailsCSS}>• {detail}</p>
                                    ))}
                                    </div>
                                </div>
                        ))):
                         (section.items.map((item,itemIDX)=>(
                               <p key={itemIDX} className={otherCSS}>• {item}</p>
                                    )))}</div>
                    ) :( section.items.map((edu,eduIDX)=>(
                        <div key={eduIDX} className="leading-tight">
                                <p className={eduSchoolCSS}>{edu.school}</p>
                                <p className={eduOtherCSS}>{edu.degree} - <span className="font-bold not-italic"> {edu.gradYear}</span></p>
                            </div>)))}
                    </div>
            </div>
        ))}
    </div>
)}

