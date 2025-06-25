import React from "react";
import Gallery from "./Gallery";
import {Fade,Slide} from 'react-awesome-reveal';
import Button from "./Button";
const btnClass = "sm:p-4 text-center font-poppins hover:bg-brand hover:text-white sm:text-2xl text-2xl font-bold rounded-lg w-[20rem] uppercase bg-white  text-brand border-solid border-brand hover:border-white border-4 ease-linear duration-200";
export default function Home({slideShowImages,welcomeContent,welcomeHeader,imageList,logo,cardContent, onViewPhotoshoots, onViewContact}) {

    return (<>
        <div className="mx-auto w-screen pt-[8rem]">
            <section className="justify-center items-center flex h-3/4 pl-8 mr-8 pb-[4rem] scroll-px-48">
              <Slide cascade triggerOnce>
                <div className="mx-auto ">
                    <Fade cascase triggerOnce duration={2000}><img src={logo} className="sm:w-[12rem] w-[8rem] mx-auto" /></Fade>
                    <p className="text-center pt-4 sm:text-3xl text-xl font-poppins font-semibold tracking-wider uppercase">Award-winning</p>
                    <h1 className="wave-text text-center font-lora font-bold uppercase text-3xl sm:text-5xl font-md text-brand text-shadow">{welcomeHeader}</h1>
                    </div>
                    </Slide>  
                    <p className="pt-1 py-2 font-normal">
                    {welcomeContent}</p>
                    </section>
                    </div>
                    <Fade duration={4000} cascade triggerOnce>
                        <Gallery
                        additionalClass="bg-white"
                        imageList={imageList} 
                        slideInterval={4000}
                        showThumbnails={false}
                        showBullets={true}
                        noHover/> 
                        </Fade>

                        <div className="bg-white pb-20 flex sm:flex-row flex-col items-center justify-center mx-auto gap-4 sm:gap-10">
                            <Button className={btnClass} 
                            btnName="Shop Prints" btnLink="https://raymond-enriquez-photography.square.site"/>
                            <Button className={btnClass} 
                            btnName="Photoshoots" onClick ={onViewPhotoshoots}/>
                            <Button className={btnClass}
                            btnName="Contact Us" onClick={onViewContact}/></div>
                            <Fade  fraction={0.6}>
                                <div className="bg-brand w-screen p-10 mb-20 bg-cover flex justify-center">
                                    <h2 className="italic animate-character text-swiss text-3xl font-lora text-center font-thin">
                                        "Creating Imagery with hopes to encourage Preservation, Self-Awareness, & Self-Healing."</h2>
                                        </div>
                                        </Fade>
                                        <div className="flex md:flex-wrap sm:flex-wrap flex-col w-screen sm:flex-row justify-center items-center gap-20 pb-20">
                                            {slideShowImages.map((image,index)=> (
                                                <Slide key={index} direction="right">
                                                    <p><img  src={image} className="shadow-lg h-80 border-8 p-2 border-black "/></p>
                                                    </Slide>))}
                                                    </div>
                                                    <div className="sm:flex lg:flex-row md:flex-row sm:flex-row items-center justify-around pb-20 gap-8 px-8"> 
                                                        {cardContent && cardContent.map((part,index)=>(
                                                            <Fade key={index} fraction={0.5} duration={3000} damping={0.5} triggerOnce cascade>

                                                                <div className="bg-brand shadow-xl rounded-xl border-1.5 text-balance max-w-[40rem] border-brand p-1 mb-4">
                                                                    <h2 className="text-xl text-center text-swiss uppercase tracking-widest underline underline-offset-4 font-lora pt-4 pb-4">{part.title}</h2>
                                                                    <Slide cascader triggerOnce direction="up" damping={0.5} fraction={0.5}>
                                                                        
                                                                        <div className="bg-white rounded-b-lg">
                                                                            <p className="p-8 rounded-b-xl font-brand text-balance tracking-wide text-lg font-poppins">{part.content}</p>
                                                                            {part.buttonLink && (
                                                                                <div className="flex justify-end">
                                                                                    <Button 
                                                                                    className="bg-brand hover:font-medium hover:shadow-lg duration-300 ease-in-out rounded-lg hover:border-brand hover:border-4 hover:bg-swiss text-swiss mt-0 mb-4 mr-4 hover:text-brand text-xl p-2 hover:cursor-pointer"
                                                                                    btnName={part.buttonName} 
                                                                                    btnLink={part.buttonLink}/>
                                                                                    </div>)}
                                                                                    </div>
                                                                                    </Slide>
                                                                                    </div>
                                                                                    </Fade>
                                                                                ))}
                                                                                </div>
                                                                                </>)}