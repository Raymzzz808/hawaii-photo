import React from 'react';
export default function PricingCard({photoPackage,priceClasses, nameClasses}){
     return(
    <div className="flex flex-row justify-center mt-8 gap-4">
        <div>
            <ul className=" text-left text-lg bg-brand text-swiss p-4 rounded-lg font-poppins">
                {photoPackage.map((item,index)=>(
                    <> 
                    <li key={index}><span className={`${nameClasses || "py-8 text-center uppercase text-2xl font-bold text-sky-200"}`}>
                        {item.name}</span></li>
                        {item.description.map((dsc,dscIndex)=>(
                            <li key={dscIndex} className="font-thin ">• {dsc}</li>
                        ))}
                    <h3 className={`${priceClasses || "text-end italic mt-4 uppercase font-bold text-5xl sm:text-3xl text-sky-400" }`}>{item.price}</h3>
                        <li className="text-end text-sm mt-0 italic">+Tax</li>
                        </>
                    ))}
            </ul>
            </div>
    </div>

            
     )
}