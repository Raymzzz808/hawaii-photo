import React from 'react';
import {Fade, Slide, AttentionSeeker} from "react-awesome-reveal";
import CoverImage from "../assets/images/Artist/artistImage2.webp";

export default function ArtistStatementSection({
    artistHeading,
    artistStatement,
}){
    return (<>
    <div className=" sm:mt-20 mt-14 flex flex-col items-center justify-center p-2 sm:p-0">
    <div className="shadow-xl flex flex-row items-center flex-wrap justify-center gap-2 border-solid sm:border-4 border-8 p-4  border-brand flex-shrink-0">
    <Fade damping={0.5} cascade duration={2000} triggerOnce>
        <img src={CoverImage} className="sm:h-[30rem] h-[24rem] shadow-xl"/>
    </Fade>
    </div>
    </div>
    <Slide direction="left" cascade triggerOnce>

   <div className="rounded-sm py-10 mx-auto max-w-4xl flex flex-col items-left justify-center sm:mt-20 mt-10 p-4">
    <AttentionSeeker effect="swing" delay={800} triggerOnce damping={0.8}>
        <h3 className="uppercase text-6xl font-bold text-brand sm:px-6 font-poppins tracking-tighter">{artistHeading}</h3>
    </AttentionSeeker>
        <div className="flex-shrink-0">
        <p className="sm:text-xl  sm:p-0 px-2 sm:mt-6 mt-4 leading-relaxed tracking-normal sm:mx-6 font-lora">{artistStatement}</p>
        </div>
</div>
    </Slide>
        </>
    );
}