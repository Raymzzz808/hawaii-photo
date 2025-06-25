<<<<<<< HEAD
import React from 'react';
import Gallery from './Gallery';
import Cover from './Cover';
export default function TheLand({galleryImages,...props}){
    return (
        <div className="items-center">
        <h2>The Land</h2>
        <Gallery  imageList={galleryImages} {...props} />
        </div>
    )
     
=======
export default function TheLand(){
    return(<>
    </>); 
>>>>>>> d116364 (Deploy built site)
}