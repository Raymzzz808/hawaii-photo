<<<<<<< HEAD
import React from 'react';
import {Fade, Slide,JackInTheBox, Bounce} from "react-awesome-reveal";
import AboutSection from './AboutSection';
import Exhibitions from './Exhibitions';
import ClientLogos from './Clients';
import ArtistStatementSection from './ArtistStatementSection';

export default function About({
    aboutHeading,
    artistHeading,
    artistStatement,
    artistName,
    aboutCopy,
    artistImage,
    coverImage,
    galleryIcon,
    clientLogos,
    artistStatementBG,
    exhibitions,
    onCV,
    onRes
}){
    return(
    <div className="bg-white pb-[8rem] pt-[6.1rem]">
    {galleryIcon && <img src={galleryIcon} className="sm:h-40 h-28 mx-auto"/>}
    <Slide cascade triggerOnce>
    <h2 className="sm:mt-30 text-center text-5xl text-brand bold uppercase font-lora font-bold">
            {aboutHeading}
            </h2>
            </Slide>
            <div className="ml-0 mx-auto sm:mx-none md:mx-none bg-white" >
                <AboutSection 
               coverImage={coverImage}
               artistImage={artistImage}
               artistName={artistName}
               aboutCopy={aboutCopy}
               onCV={onCV}
               onRes={onRes}
               />
               <ArtistStatementSection 
               artistStatementBG = {artistStatementBG}
               artistHeading = {artistHeading}
               artistStatement = {artistStatement}/>
               <ClientLogos clientLogos={clientLogos}/>
               <Exhibitions exhibitions={exhibitions}/>
               </div>
               </div>
               )}
=======
export default function About(){
    return(<> 
        </>

    );
}
>>>>>>> d116364 (Deploy built site)
