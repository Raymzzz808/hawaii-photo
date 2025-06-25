import React, {useImperativeHandle, useRef,forwardRef} from 'react';
import Button from './Button';
import {Slide} from 'react-awesome-reveal';
import {createPortal} from 'react-dom';
const btnClass = "duration-300 ease-in-out sm:text-2xl mt-8 font-md border-2 border-white bg-brand hover:font-bold hover:border-red-600 rounded-md text-swiss  px-2 mr-2 h-10 ";
const bookingBtnClass = "duration-300 ease-in-out rounded-md py-2 px-2 mt-8 font-md border-2 hover:font-bold hover:border-cyan-600 border-white text-white bg-brand hover:text-swiss hover:text-bold"
const dialogClass ="duration-300 ease-in-out overflow-y-auto scrollbar-hide justify-center items-center mx-auto border-none bg-cover rounded-lg  p-0 bg-brand/30 animate-slide-in-top backdrop:bg-black/90 shadow-md";

const PopUp = forwardRef(function Modal({children, buttonCaption,additionalBtns, additionalClasses},ref){
    const dialog = useRef();
    useImperativeHandle(ref,()=> {
        return {
            open(){
                dialog.current.showModal();
            }
        };
    })
    
    return createPortal(
        <dialog ref={dialog} className={`${dialogClass} ${additionalClasses}`}>
            <span className="text-swiss hover:text-red-600 hover:text-5xl ease-in-out duration-300 text-3xl font-thin hover:cursor-pointer" onClick={()=> {dialog.current.close();}}> X </span>
        {children}
        <form method="dialog" className="gap-2 flex tracking-widest flex-row justify-end">
         {additionalBtns}   
         <div>   
        {buttonCaption && <button className={btnClass}>{buttonCaption}</button>}
         </div>
            </form>
        </dialog>
        ,
        document.getElementById('modal-root')
    );
});
export default PopUp;