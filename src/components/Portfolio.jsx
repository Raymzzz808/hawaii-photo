import React,{useRef} from 'react';
import Gallery from './Gallery';
import {Fade, Slide,JackInTheBox, Bounce} from "react-awesome-reveal";
import 'react-image-gallery/styles/css/image-gallery.css';
export default function Portfolio({title,galleryIcon, galleryDescription, additionalClass,description,galleryImages,children,...props}){
    const galleryCopy =  galleryDescription ? galleryDescription.split(/\n|\./).map(sentence => sentence.trim()) : null; 

    return (<div className="pt-20">
        <div className=" sm:mt-2 flex font-black border-solid w-screen mx-auto">
            <section className="content-start w-screen h-3/64  scroll-px-48  text-center">
                {galleryIcon && 
                (<Fade duration={2000} cascade >
                    <img src={galleryIcon} className="h-20 mt-6 mb-0 mx-auto"/>
                    </Fade>)}
                    <Slide direction="left" cascade triggerOnce>
                        <h2 className="mt-2 font-lora uppercase text-3xl sm:text-5xl font-md text-brand text-shadow">
                            {title}
                            </h2>
                            </Slide>
                            
                            <div className="w-screen flex items-center justify-center flex-col pb-20"> 
                                {description && <p className="mt-1 py-2 italic text-xl font-thin font-brand  flex flex-row max-w-[400px] flex-wrap justify-center m-8">
                                    {description}
                                    </p>}
                                    <div className="mt-6">
                                        {galleryDescription ? galleryCopy.map((sentence,index)=> {
                                            const words  = sentence.split(/(\s+)/);
                                            return (
                            <p key={index} className="font-poppins sm:text-2xl font-normal leading-relaxed tracking-tight">
                                {words.map((word,idx)=> {
                                    const isAllCaps = /^[A-Z]{3,}$/.test(word);
                                    return isAllCaps ? ( 
                                    <strong key={idx} className="font-bold sm:text-3xl text-brand/80 p-1 self-center">{word}</strong>
                                    ) : <span key={idx} className="italic">{word}</span> })}
                                    </p>
                                )}) : null }
                                </div> 
                                </div>
                                {children}
                                </section>
                                </div>
        <Gallery 
        useBrowserFullScreen={true} 
        slideInterval={8000} 
        slideDuration={400}
        imageList={galleryImages}
        additionalClass ={additionalClass}
         {...props} />
        </div>
    )    
}