import ImageGallery from "react-image-gallery";
import React,{useRef,useState} from 'react';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({imageList,gallerySectionClass,additionalClass,noHover,...props}){
    const galleryRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    function handleMouseOver(){
        if(galleryRef.current){
            setIsHovered(true);
            galleryRef.current.pause();
        }
    }
    function handleMouseLeave(){
        if(galleryRef.current){
            setIsHovered(false);
            galleryRef.current.play(); 
        }
    }    

    return(
        <section 
        className={`pb-20 ${gallerySectionClass} bg-white`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}>

        <ImageGallery 
        additionalClass={`px-0 ${additionalClass}`}
        lazyLoad={true}
        ref={galleryRef}
        autoPlay={true}
        showPlayButton={(!noHover && isHovered) ?  true :false}
        showNav={(!noHover && isHovered) ?  true : false}
        showFullscreenButton={(!noHover && isHovered) ? true : false}
        useBrowserFullScreen={false}
        items={imageList} 
        onClick={()=> {galleryRef.current?.toggleFullScreen();}}
        {...props}/>
        </section>
    )
}