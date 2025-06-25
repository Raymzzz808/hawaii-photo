import React from 'react';
import Button from './Button';
const btnClass = "duration-300 ease-in-out border-2 border-brand bg-brand text-swiss font-bold uppercase p-2 rounded-xl hover:bg-swiss hover:text-brand hover:border-4 hover:border-brand";
import {Fade, Slide,JackInTheBox, Bounce, AttentionSeeker} from "react-awesome-reveal";
export default function AboutSection({
    artistImage,
    aboutCopy,
    onCV,
    onRes
    
}){
    return(<>
    <Fade duration={2000} cascade triggerOnce> 
        <div className="mx-auto flex flex-col items-center justify-center sm:mt-20 mt-10 p-4">
          <div className="flex flex-row justify-center items-center flex-wrap gap-8 max-w-6xl">
            <div className="flex-shrink-0">
              <Bounce delay={700} cascade triggerOnce>
                 <AttentionSeeker duration={1000} effect="swing" cascade triggerOnce>

                <img className="mt-10 rounded-full  h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] shadow-xl"
                src={artistImage} alt="Raymond Enriquez"/>
                </AttentionSeeker>
              </Bounce>
              </div>
              <div className="flex flex-col max-w-xl mt-2 sm:p-0 p-2">
                <h3 className="sm:text-8xl  text-6xl font-bold uppercase text-brand leading-none font-poppins">
                  Raymond <br />
                  <span className=" tracking-wider relative -top-2 sm:-top-4">
                    Enriquez</span>
                  </h3>
                  <h4 className="text-xl font-thin font-lora sm:text-center tracking-wide relative -top-2">
                    Artist + Photographer based in Honolulu, Hawaii
                    </h4>
                    <div className=" sm:mt-10 mt-12 space-x-4 flex flex-row sm:justify-end sm:px-2">
                      <AttentionSeeker duration={2000} effect="swing" cascade triggerOnce>
                      <Button className={btnClass} btnName="Artist CV" onClick={onCV}/>
                      <Button className={btnClass} btnName="Resume" onClick={onRes}/> 
                      </AttentionSeeker>
                      </div>
                      </div>
                      </div>
                      <div className="max-w-4xl mt-20 sm:px-10 px-5 border-l-4 border-brand">
                        <Slide direction="right" cascade triggerOnce damping={0.2}>
                          <JackInTheBox delay={1200} cascade triggerOnce>
                          <span className=" text-5xl tracking-wide font-lora text-brand/90 sm:font-normal font-light">ALOHA!</span>
                          </JackInTheBox>
                          <p className="sm:text-xl leading-relaxed sm:tracking-wide first-line:indent-8 font-lora">
                          {aboutCopy}
                          </p>
                          </Slide>
                          </div> 
                          </div>
                          </Fade>
                          </>
    )}

