import React from 'react';
export default function CV_Heading({source,copyRight,copyLeft}){
    return (            <div className="flex items-center flex-row flex-wrap justify-start sm:pb-4 pb-2  md:pt-0 sm:pt-0 pt-4"> 

                        {copyRight && (<><img src ={source} className="h-10 w-10 sm:w-20 sm:h-20 md:h-14 md:w-14"/>
                        <h2 className="text-brand text-3xl sm:text-5xl md:text-4xl uppercase font-bold font-poppins self-center pl-4"> {copyRight}</h2></>)}
                        
                        {copyLeft && (<>
                        <h2 className="text-brand text-3xl sm:text-5xl md:text-4xl uppercase font-bold font-poppins self-center pr-4"> {copyLeft}</h2>
                        <img src ={source} className="h-10 w-10 sm:w-20 sm:h-20"/>
                        </>)}
                    </div>
    )
}