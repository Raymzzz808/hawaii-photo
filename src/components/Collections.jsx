import React from 'react';
const collectionTitleCSS  = "text-brand/80 text-2xl sm:text-3xl font-bold text-lora uppercase";
const collectionYearCSS = "text-lg font-bold italic relative  -top-2";
const collectionContentCSS = "font-lora text-lg sm:text-xl pb-4";
export default function Collections({collections}){
    return (     
                        {collections.map((collection, collectionIDX) => (
                          <div key={collectionIDX}>
                            <h3 className={collectionTitleCSS}>{collection.title}</h3>
                            <p className={collectionYearCSS}>{collection.year}</p>
                            <p className={collectionContentCSS}>{collection.content}</p>
                          </div>
                        ))}
    )
}