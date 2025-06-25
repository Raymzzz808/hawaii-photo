import React from 'react';
import {Slide, Fade} from 'react-awesome-reveal';
import Button from './Button';

export default function Books({onClick, bookImages, title, description, galleryIcon}) {

    return ( <> <div>
        <div className=" sm:mt-20 mt-2 flex font-black border-solid w-screen mx-auto">
            <section className="content-start w-screen flex-wrap  text-center">
                {galleryIcon && (
                    <Fade duration={6000} cascade triggerOnce>
                        <img src={galleryIcon} className="h-40 mt-0 mb-0 mx-auto"/>
                    </Fade>
                )}
                <Slide direction="left" cascade triggerOnce>
                    <h2
                        className=" font-lora uppercase text-3xl sm:text-5xl font-md text-brand text-shadow">
                        {title}</h2>
                </Slide>
            </section>
        </div>
    </div> < div className = "flex justify-center p-2 sm:p-8 w-full" > <ul
        className="flex flex-col gap-2 sm:gap-12 sm:bg-brand w-full max-w-screen-xl sm:p-8 sm:rounded-lg">
        {bookImages.map((book, index) => (
            <li
                key={index}
                className="flex flex-col sm:flex-md:flex-row gap-8 bg-white sm:bg-swiss md:bg-swiss p-6 sm:rounded-lg shadow-md">
                <div className="flex-shrink-0 justify-center bg-white/60 p-4">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="bg-white mx-auto w-[30rem] object-cover rounded-md"/>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                    <h3 className="uppercase flex flex-row  font-lora text-3xl md:text-5xl font-bold mb-4">
                        {book.title}
                    </h3>
                    <p className="mb-4 sm:text-md sm:w-1/2 text-base text-gray-700">{book.description}</p>
                    {book.link && <Button
                        className="bg-brand text-swiss w-[10rem] text-center font-thin hover:text-white p-4 rounded-md hover:font-bold"
                        btnName={`Get the ${book.type}`}
                        btnLink={book.link}/>}
                </div>
            </li>
        ))}
    </ul> </div>                
        </ >)
}