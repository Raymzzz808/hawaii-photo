import React from 'react';
import { cv } from "./ProData";
import CV_Heading from './CV_Heading';
import exhibitions from '../assets/icons/exhibition.webp';
import collections from '../assets/icons/gallery.webp';
import education from '../assets/icons/academic.webp';
import skills from '../assets/icons/creative-thinking.webp';
import bio from '../assets/icons/self.webp';
const infoHeadingCSS = "text-brand  text-3xl sm:text-5xl md:text-5xl uppercase font-bold font-poppins md:pr-4 pt-4 sm:pt-8";
const subHeadingCSS = "text-brand/80 text-2xl sm:text-3xl md:text-2xl font-bold text-lora leading-relaxed";
const schoolCSS = "text-brand/80 text-lg md:text-xl sm:text-xl font-bold text-lora md:pr-2";
const eduDetails = "font-lora text-md sm:text-xl font-bold relative sm:-top-0 md:-top-0 -top-2";
const detailCSS = "font-lora text-lg sm:text-xl leading-tight sm:leading-relaxed";
const collectionTitleCSS  = "text-brand/80 text-2xl sm:text-3xl font-bold text-lora uppercase";
const collectionYearCSS = "text-lg font-bold italic relative  -top-2";
const collectionContentCSS = "font-lora text-lg sm:text-xl pb-4";

export default function Cv() {
        const divider = <div className="h-2 bg-brand/60 mb-4 mt-4 visible sm:hidden"></div> ; 

  return (
    <div className="bg-white w-full flex flex-col md:p-4 sm:p-6 p-0 pb-8 rounded-sm">
      <div className="flex md:flex-row sm:flex-row flex-col w-full p-2 sm:p-6">
        <div className="flex flex-col flex-1">
          {cv.map((section, sectionIDX) => (

            <React.Fragment key={sectionIDX}>
                
              {section.section === "Info" && section.content.map((content, contentIDX) => (
                <div key={contentIDX}>
                  <p className={infoHeadingCSS}>
                    {content.name}</p>
                  <p className="font-poppins text-sm sm:text-xl text-brand md:pr-2">{content.email && (<a href={`mailto:${content.email.address}`}>{content.email.address}</a>)}</p>
                  <p className="font-poppins text-sm sm:text-xl text-brand md:pr-2">{content.website && (<a href={content.website.link}>{content.website.site}</a>)}</p>
                </div>
              ))}
              {section.section === "Education" && (<div className="sm:pt-52 pt-8">
              {divider}
              <CV_Heading source ={education} copyRight={section.section}/>
                {section.content.map((edu, eduIDX) => (
                <div key={eduIDX} className="mb-4 sm:tracking-tight tracking-normal leading-tight">
                  <p className={schoolCSS}>{edu.degree}</p>
                  <p className={eduDetails}>{edu.school}</p>
                  <p className="sm:text-lg text-sm font-bold italic sm:-top-2 -top-3 md:-top-1 relative">{edu.gradYear}</p>
                </div>
              ))}
            </div>)}

          {section.section === "Skills" && (<> 
          {divider}
          <CV_Heading source={skills} copyRight={section.section}/>
          {section.content.map((skill, skillIDX)=> (
            <div key={skillIDX}> 
            <p className={subHeadingCSS}>{skill.software}</p>            
            <div className="w-1/2 h-8 mb-4">
            <div className="h-full bg-brand rounded-sm flex flex-row items-center"
            style={{ width: `${Math.floor(skill.experience * 10)}%` }}>
                <p className="font-poppins text-white text-sm md:text-lg sm:text-xl font-bold px-2">{skill.experience} Years </p>
                </div>            
            </div>
            </div>
          ))}
          </>)}
            </React.Fragment>
          ))}
        </div>

        {/* TOP-RIGHT */}
        <div className="flex flex-col flex-1 sm:border-l-4 sm:border-swiss sm:pl-10">
          {cv.map((section, sectionIDX) => (
              <React.Fragment key={sectionIDX}>
                {/* BIO SECTION */}
              {section.section === "Bio" && (
                <div className="">
                    {divider}
                    <CV_Heading source ={bio} copyLeft={section.section}/>
                    <p className={`${detailCSS} pb-8`}>{section.content}</p>
                </div>
              )}
              
              {/* EXHIBITION SECTION */}

              {section.section === "Exhibitions" && (
                <> 
                {divider}
                   <CV_Heading source ={exhibitions} copyLeft={section.section}/>
                {section.content.sort((a,b) => 
              b.year.toString().localeCompare(a.year.toString())).map((show, showIDX) => (
                <ul key={showIDX} className="pb-4 list-none">
                  <li className={`${subHeadingCSS} pb-2 sm:pb-0`}>{show.year}</li>
                  {show.entries.map((entry, entryIDX) => (
                    <ul key={entryIDX}className="sm:pl-6 pl-4 sm:pb-0 pb-2">
                    <li className={`${detailCSS} list-disc list-outside`}>{entry}</li></ul>
                  ))}
                </ul>
              ))}
              </>)}

            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="w-full">
        {cv.map((section, sectionIDX) => (
          <React.Fragment key={sectionIDX}>
            {section.section === "Collections" && (
              <div className="sm:p-8 p-2">
                {divider}
                   <CV_Heading source={collections} copyLeft={section.section}/>
                {section.content.map((collection, collectionIDX) => (
                  <div key={collectionIDX}>
                    <h3 className={collectionTitleCSS}>{collection.title}</h3>
                    <p className={collectionYearCSS}>{collection.year}</p>
                    <p className={collectionContentCSS}>{collection.content}</p>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}