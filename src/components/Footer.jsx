import React from 'react';
export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();
     return(
     <div className="bg-brand pb-2 pt-2">
         <p className="bg-text-xs text-center italic font-bold text-swiss">©{year} Raymond Enriquez</p>
         <p className="text-xs text-center mb-2 italic text-swiss">All Rights Reserved.</p>
         </div>
     )
}