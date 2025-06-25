// FlipCard.jsx
import React, { useState } from "react";
export default function FlipCard({ 
    contentDivClass,
    frontContent,
    frontDivClass,
     backContent, 
     backDivClass,
     additionalClasses,
 }) {
        const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`perspective w-64 h-80 hover:cursor-pointer ${additionalClasses}`} onClick={()=> setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${contentDivClass} ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full backface-hidden bg-brand border rounded-xl shadow-md flex  justify-center ${frontDivClass}`}>
          {frontContent}
        </div>
        <div className={`absolute w-full h-full backface-hidden bg-swiss border rounded-xl shadow-md transform rotate-y-180 flex justify-center ${backDivClass}`}>
          {backContent}
        </div>
      </div>
    </div>
  );
}
