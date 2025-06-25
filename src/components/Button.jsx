<<<<<<< HEAD
import React from "react";

export default function Button({ btnName, btnLink,onClick,booking, ...props }) {
  if (btnLink) {
    return (
      <a
        href={btnLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-lora text-swiss hover:text-white hover:font-bold px-4 py-2 rounded-lg transition-colors duration-300"
       onClick={onClick}
        {...props}
      >
        {btnName}
      </a>
    );
  }
  
  return (
    <button
      className="font-lora text-swiss hover:text-white hover:font-bold px-4 py-2 rounded-lg transition-colors duration-300"
      onClick={onClick}
      {...props}
    >
      {btnName}
    </button>
  );
}
=======
export default function Button({btnName,...props}){

     return(
        <button className="bg-white text-sky-900 
        text-thin uppercase rounded-sm hover:bg-sky-900 
        hover:text-white hover:text-bold"
        {...props}> {btnName} </button>
     )
}
>>>>>>> d116364 (Deploy built site)
