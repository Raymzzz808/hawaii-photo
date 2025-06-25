<<<<<<< HEAD
import React,{useRef} from 'react';
import Portfolio from './Portfolio';
import Button from './Button';
import PricingCard from './PricingCard';
import {photoSession, miniSession} from '../AppContent';
import PopUp from './PopUp';
const popUpBtnCSS="duration-300 ease-in-out text-2xl bg-brand border-2 border-swiss/90 hover:border-brand text-swiss p-2 rounded-md shadow-lg font-thin  hover:font-bold hover:bg-swiss hover:border-4 hover:text-brand";

export default function PhotoSessions({galleryImages,galleryIcon}){
  const modal = useRef();
  function handlePricing(){
    modal.current.open();
  }
    return(<>
  
    

    <Portfolio 
    galleryImages={galleryImages}
    galleryIcon={galleryIcon}
    title="Photography Sessions"
    showThumbnails={false}
    showBullets={true}
    slideInterval={3000}
    lazyLoading={true}    
    > 
    <menu className="gap-4 flex items-center justify-center mb-8 sm:pb-2 md:pb-4">
    <Button className={popUpBtnCSS} 
    btnName="Book Now"
    btnLink="https://raymondenriquezphotography.setmore.com"
    />

    <Button className={popUpBtnCSS} 
    btnName="View Pricing"
    onClick={handlePricing}/>
    </menu>
    </Portfolio>


    <PopUp ref={modal} buttonCaption="Close" 
    additionalBtns={(
    <Button 
    className="duration-300 ease-in-out mt-8 text-2xl font-md border-2 border-white bg-brand hover:font-bold hover:border-cyan-600 rounded-md text-swiss  px-2 py-2 mr-2"
    btnName="Book Now"
    btnLink="https://raymondenriquezphotography.setmore.com"/>)}>

    <h2 className="text-center mx-auto text-4xl font-bold uppercase font-lora text-swiss">
      Our Packages:</h2>
   <PricingCard 
   photoPackage={photoSession} 
   nameClasses="py-8 text-center uppercase text-2xl font-bold text-sky-200"/>
   
   <PricingCard 
   photoPackage={miniSession} 
   nameClasses="py-8 text-center uppercase text-2xl font-bold text-red-600"
   priceClasses="text-end italic mt-4 uppercase font-bold text-5xl sm:text-3xl text-red-600"/>
   </PopUp>
    </>
    )
=======
export default function PhotoSessions(){
    return(<>
    </>);
>>>>>>> d116364 (Deploy built site)
}