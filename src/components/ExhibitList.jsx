import React from 'react';
const exhibitionsCSS = "pb-4 list-none";
const showListCSS = "sm:pl-6 pl-4 sm:pb-0 pb-2";
const yearCSS = "text-brand/80 text-2xl sm:text-3xl md:text-2xl font-bold text-lora leading-relaxed pb-2 sm:pb-0"
const showDescriptionCSS =  "font-lora text-lg sm:text-xl leading-tight sm:leading-relaxed list-disc list-outside";
export default function ExhibitList({exhibitions}){
    
    return (<>
          {exhibitions.sort((a,b) => 
              b.year.toString().localeCompare(a.year.toString())).map((exhibit, exhibitIDX) => (
                  <ul key={exhibitIDX} className={exhibitionsCSS}>
                  <li className={yearCSS}>{exhibit.year}</li>
                  <ul key={entryIDX}className={showListCSS}>
                  {exhibit.entries.map((entry, entryIDX) => (
                    <li key={entryIDX} className={showDescriptionCSS}>{entry}</li>
                ))}
                </ul>
                </ul>
              ))}
              </>
    )


    
}