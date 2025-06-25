 import { createContext , useState, useContext, useRef} from 'react';

 //BACKEND::::::::::::::::::::::::::::
 import express from 'express';
 import dotenv from 'dotenv';
 import pg from 'pg';
 const app = express();
 const port = 4000;
 const db = new pg.Client({
  user: 'DB_username',
  host: 'DB_host',
  database: 'DB_name',
  password: 'DB_pw',
  port: 'DB port'
});

db.connect();

app.post("/galleryImages", async (req,res)=>{
  const {name : selectedPage} = req.body;
  const result = await db.query(
    "SELECT * FROM pageContent WHERE gallery = $1",
    [selectedPage],
  );

  //Algo. Optimization Check:
  if(!result) {
    console.log('No Results Fround for', selectedPage);
    return;
    //Return Results:
  } else {
    //FILTER 
    const galleryImages = result.rows.map((row)=>({
      original: row.image,
      thumbnail: row.image,
    }));

    const galleryContent = result.rows.map((row)=>({
      title: row.title,
      logo: row.logo,
      content: row.galleryContent,
    }));
    res.status(200).json([galleryImages, galleryContent]);
  } 
});

//PORT LISTENER::::::
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//CREATE CONTEXT - For Gallery::::::
 export const  GalleryContext = createContext({
   galleryImages:[],
   selectedPage: null,
   galleryContent: () => {},
 });
 
 export default function GalleryContextProvidere({children}){
  const [galleryImages, setGalleryImages] = useState([]);
      const [selectPage, setSelectPage] = useState({
          selectedPage: undefined,
          pageId: undefined,
      });

      const galleryCtx = useContext({
        galleryImages: [],
        galleryContent: handleMenuClick,
      });
      
        function handleMenuClick(clickedItem) {
          setSelectPage((prev)=>{
              return{
                  ...prev,
                  selectedPage: clickedItem,
              }
          });      
      }
      
  return (
    <GalleryContext.Provider value={{galleryCtx}}>
      {children}
    </GalleryContext.Provider>
  )
 }

 const galleryCtx = useContext(GalleryContext);

 export const galleryInfo = [
  {
   logo: theLandIcon,
   title:"The Land",
   description: theLandCopy,
   galleryImages: theLandGallery,
 },
 {
  logo: theSeaIcon,
  title: "The Sea",
  description: theSeaCopy,
  galleryImages: theSeaGallery,
 },
 {
  logo: oceanLeisIcon,
  title: "Ocean Leis",
  description: oceanLeisCopy,
  galleryImages: oceanLeisGallery,
 }
];

{section.section !== "Eduction" && section.section === ("Professional Summary" || "Certifcations" || "Skills")  ? (
  {section.items.map((item,sectionIDX) => (
    <div key={sectionIDX}> 
    <p>{item}</p>
    </div>
  ))}

 ) : (
  {section.items.map((edu,eduIDX)=>(
    <div key={eduIDX}>
    <p>{edu.school}</p>
    <p>{edu.degree}</p>
    <p>{edu.gradYear}</p>
    </div>
  ))}

 )}

 /*
 1. If Section is NOT EDUCATION?
  i. CHECK it is NOT Certs / Summary / Skill :
   NOT above? ->  Map the Experience 
   IF it is ? -> Map the Items i Certs Summary / SKill!
 */

  {section.section === "Professional Experience" ? (
     <div className={sectionDivCSS}>
                        {section.items.map((item,itemIDX)=> (
                            <div key={itemIDX}>
                            <p className={titleCSS}>{item.title}</p>
                            <p>{item.company}</p>
                            <p>{item.location}</p>
                            <p>{item.dates}</p>
                            <ul className={detailsCSS}>
                                {item.details && item.details.map((detail,idXd)=>(
                                    <li key={idXd}>•{detail}</li>
                                )) }
                                
                            </ul>
                           
                            </div>
  ) :
    
    (

      
    ) }

{section.items.map((item,itemIDX)=>(
                        
                        <li key ={itemIDX}>
                            {item.school ? (
                                <ul>
                                    {item.school.map((school,sIDX)=>(
                                        <ul key={sIDX}>
                                            <li>{school.school}</li>
                                            <li>{school.degree}</li>
                                        </ul>
                                    ))}
                                </ul>
                            ): (
                            <li>
                                <p>{item.company}</p>
                                <p>{item.title}</p>
                                <p>{item.location}</p>
                                <p>{item.dates}</p>
                                <ul>
                                {item.details.map((detail,dIDX)=> (
                                        <li>{detail}</li>
                                    ))}
                                    </ul>
                                </li>
                                )}
                        </li>
                    ))}




const TheLandComponent = () => {
  const sentences = theLandCopy
    .split(/\n|\./) // split by newline or period
    .map(s => s.trim())
    .filter(Boolean); // remove empty strings

  return (
    <div>
      {sentences.map((sentence, index) => (
        <p key={index}>{sentence}.</p>
      ))}
    </div>
  );
};

</div>

{galleryDescription ? galleryCopy.map((sentence, index) => {
      // Split the sentence into words and spaces
      const words = sentence.split(/(\s+)/); // keeps spaces in the array
      return (
        <p key={index} className="font-poppins sm:text-2xl text-xl font-normal">

          {words.map((word, i) => {
            // Check if word is ALL CAPS and contains letters (avoids bolding punctuation)
            const isAllCaps = /^[A-Z]{2,}$/.test(word);
            return isAllCaps ? (
              <strong key={i} className="font-bold">{word}</strong>
            ) : (
              <span key={i}>{word}</span>
            );
          })}


        </p>
      );
    })
  : null}

  ///
<Fade duration={2000} cascade triggerOnce> 
                           <section className=" shadow-xl bg-no-repeat bg-cover section1 w-full sm:w-[50%] md:w-full lg:w-[60%] md:p-4 sm:mx-5 sm:y-5 mt-4 sm:rounded-2xl" 
                           style={{backgroundImage: `url(${coverImage})`}}>
                           <div className="bg-brand/30 rounded-xl py-4 px-4">
                       <Slide duration={2000} direction="down" cascade triggerOnce damping={0.2}>
                       <Bounce delay={800} cascade triggerOnce>
                   <img className="xl:float-left sm:float-none md:float-none rounded-full h-[15rem] w-[15rem] sm:h-[28rem] sm:w-[28em] md:h-[20rem] md:w-[20rem] border-white/0 mr-[6rem] sm:mr-[3rem] mt-4 sm:mt-0 sm:mb-0 mb-8 shadow-xl" 
                   src={artistImage}/>
                       </Bounce>
                   <Slide direction="left" cascade triggerOnce damping={0.2}>
                       <h3 className="font-bold text-6xl sm:text-5xl text-white font-poppins animation-character">ALOHA!</h3>
                       <JackInTheBox delay={400} cascade triggerOnce>
                           <p className="text-white text-xl mb-0.5">My name is <b>{artistName}</b>.</p>
                       </JackInTheBox>
                       <p className="font-poppins text-swiss text-md sm:leading-relaxed sm:tracking-tight text-balance">
                           {aboutCopy}
                       </p>
                   </Slide>
       <section className="flex text-end justify-end sm:justify-left md:justify-left gap-2 mt-4 mb-4">
       <AttentionSeeker  duration={2000} effect="swing" cascade triggerOnce>
        <Button className={btnClass} btnName="Artist CV" onClick={onCV}/>
        <Button className={btnClass} btnName="Resume" onClick={onRes}/> 
        </AttentionSeeker>
                   </section>
                   </Slide>
                  </div>
       </section>
       </Fade>
       
       const template = (
       <div class="min-h-screen p-6 bg-gray-100 flex flex-col">
  <!-- Top Row: Two Divs Side by Side -->
  <div class="flex flex-1 flex-col md:flex-row gap-6 mb-6">
    <div class="flex-1 bg-white p-6 rounded-2xl shadow-md">
      <!-- Content for Div 1 -->
      <h2 class="text-xl font-semibold mb-2">Div 1</h2>
      <p>This is the first top half div.</p>
    </div>

    <div class="flex-1 bg-white p-6 rounded-2xl shadow-md">
      <!-- Content for Div 2 -->
      <h2 class="text-xl font-semibold mb-2">Div 2</h2>
      <p>This is the second top half div.</p>
    </div>
  </div>


  <!-- Bottom Div: Full Width Below the Top Two -->
  <div class="bg-white p-6 rounded-2xl shadow-md">
    <!-- Content for Div 3 -->
    <h2 class="text-xl font-semibold mb-2">Div 3</h2>
    <p>This div spans the full width below the two above.</p>
  </div>
</div>);

//Gallery Button Link::::
// .image-gallery-icon {
//   color: #fff;
//   transition: all .3s ease-out;
//   appearance: none;
//   background-color: rgba(0, 0, 0, 0);
//   border: 0;
//   cursor: pointer;
//   outline: none;
//   position: absolute;
//   z-index: 4;
//   filter: drop-shadow(0 2px 2px rgb(25.5, 25.5, 25.5))
// }

// @media(hover: hover)and (pointer: fine) {
//   .image-gallery-icon:hover {
//     color: #337ab7
//   }

//   .image-gallery-icon:hover .image-gallery-svg {
//     transform: scale(1.1)
//   }
// }

// .image-gallery-icon:focus {
//   outline: 2px solid #337ab7
// }

// .image-gallery-using-mouse .image-gallery-icon:focus {
//   outline: none
// }

// .image-gallery-fullscreen-button,
// .image-gallery-play-button {
//   bottom: 0;
//   padding: 20px
// }

// .image-gallery-fullscreen-button .image-gallery-svg,
// .image-gallery-play-button .image-gallery-svg {
//   height: 28px;
//   width: 28px
// }

// @media(max-width: 768px) {

//   .image-gallery-fullscreen-button,
//   .image-gallery-play-button {
//     padding: 15px
//   }

//   .image-gallery-fullscreen-button .image-gallery-svg,
//   .image-gallery-play-button .image-gallery-svg {
//     height: 24px;
//     width: 24px
//   }
// }

// @media(max-width: 480px) {

//   .image-gallery-fullscreen-button,
//   .image-gallery-play-button {
//     padding: 10px
//   }

//   .image-gallery-fullscreen-button .image-gallery-svg,
//   .image-gallery-play-button .image-gallery-svg {
//     height: 16px;
//     width: 16px;
//   }
// }

// .image-gallery-fullscreen-button {
//   right: 0
// }

// .image-gallery-play-button {
//   left: 0
// }

// .image-gallery-top-nav,
// .image-gallery-bottom-nav {
//   padding: 10px 10px;
//   left: 50%;
//   transform: translateX(-50%)
// }

// .image-gallery-top-nav .image-gallery-svg,
// .image-gallery-bottom-nav .image-gallery-svg {
//   height: 120px;
//   width: 90px
// }

// @media(max-width: 768px) {

//   .image-gallery-top-nav .image-gallery-svg,
//   .image-gallery-bottom-nav .image-gallery-svg {
//     height: 72px;
//     width: 48px
//   }
// }

// @media(max-width: 480px) {

//   .image-gallery-top-nav .image-gallery-svg,
//   .image-gallery-bottom-nav .image-gallery-svg {
//     height: 48px;
//     width: 36px
//   }
// }

// .image-gallery-top-nav[disabled],
// .image-gallery-bottom-nav[disabled] {
//   cursor: disabled;
//   opacity: .6;
//   pointer-events: none
// }

// .image-gallery-top-nav {
//   top: 0
// }

// .image-gallery-bottom-nav {
//   bottom: 0
// }

// .image-gallery-left-nav,
// .image-gallery-right-nav {
//   padding: 50px 10px;
//   top: 50%;
//   transform: translateY(-50%)
// }

// .image-gallery-left-nav .image-gallery-svg,
// .image-gallery-right-nav .image-gallery-svg {
//   height: 120px;
//   width: 60px
// }

// @media(max-width: 768px) {

//   .image-gallery-left-nav .image-gallery-svg,
//   .image-gallery-right-nav .image-gallery-svg {
//     height: 72px;
//     width: 36px
//   }
// }

// @media(max-width: 480px) {

//   .image-gallery-left-nav .image-gallery-svg,
//   .image-gallery-right-nav .image-gallery-svg {
//     height: 48px;
//     width: 24px
//   }
// }

// .image-gallery-left-nav[disabled],
// .image-gallery-right-nav[disabled] {
//   cursor: disabled;
//   opacity: .6;
//   pointer-events: none
// }

// .image-gallery-left-nav {
//   left: 0
// }

// .image-gallery-right-nav {
//   right: 0
// }

// .image-gallery {
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   -o-user-select: none;
//   user-select: none;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   position: relative
// }

// .image-gallery.fullscreen-modal {
//   background: #000;
//   bottom: 0;
//   height: 100%;
//   left: 0;
//   position: fixed;
//   right: 0;
//   top: 50%;
//   width: 100%;
//   z-index: 5;
// }

// .image-gallery.fullscreen-modal .image-gallery-content {
//   top: 50%;
//   transform: translateY(-50%)
// }

// .image-gallery-content {
//   position: relative;
//   line-height: 0;
//   top: 0
// }

// .image-gallery-content.fullscreen {
//   background: #000
// }

// .image-gallery-content .image-gallery-slide .image-gallery-image {
//   max-height: calc(100vh - 80px)
// }

// .image-gallery-content.image-gallery-thumbnails-left .image-gallery-slide .image-gallery-image,
// .image-gallery-content.image-gallery-thumbnails-right .image-gallery-slide .image-gallery-image {
//   max-height: 100vh
// }

// .image-gallery-slide-wrapper {
//   position: relative
// }

// .image-gallery-slide-wrapper.image-gallery-thumbnails-left,
// .image-gallery-slide-wrapper.image-gallery-thumbnails-right {
//   display: inline-block;
//   width: calc(100% - 110px)
// }

// @media(max-width: 768px) {

//   .image-gallery-slide-wrapper.image-gallery-thumbnails-left,
//   .image-gallery-slide-wrapper.image-gallery-thumbnails-right {
//     width: calc(100% - 87px)
//   }
// }

// .image-gallery-slide-wrapper.image-gallery-rtl {
//   direction: rtl
// }

// .image-gallery-slides {
//   line-height: 0;
//   overflow: hidden;
//   position: relative;
//   white-space: nowrap;
//   text-align: center;
//   touch-action: none
// }

// .image-gallery-slide {
//   left: 0;
//   position: absolute;
//   top: 0;
//   width: 100%
// }

// .image-gallery-slide.image-gallery-center {
//   position: relative
// }

// .image-gallery-slide .image-gallery-image {
//   width: 100%;
//   object-fit: contain
// }

// .image-gallery-slide .image-gallery-description {
//   background: rgba(0, 0, 0, .4);
//   bottom: 70px;
//   color: #fff;
//   left: 0;
//   line-height: 1;
//   padding: 10px 20px;
//   position: absolute;
//   white-space: normal
// }

// @media(max-width: 768px) {
//   .image-gallery-slide .image-gallery-description {
//     bottom: 45px;
//     font-size: .8em;
//     padding: 8px 15px
//   }
// }

// .image-gallery-bullets {
//   bottom: 20px;
//   left: 0;
//   margin: 0 auto;
//   position: absolute;
//   right: 0;
//   width: 80%;
//   z-index: 4
// }

// .image-gallery-bullets .image-gallery-bullets-container {
//   margin: 0;
//   padding: 0;
//   text-align: center
// }

// .image-gallery-bullets .image-gallery-bullet {
//   appearance: none;
//   background-color: rgba(0, 0, 0, 0);
//   border: 1px solid #fff;
//   border-radius: 50%;
//   box-shadow: 0 2px 2px hsl(0, 0%, 10%);
//   cursor: pointer;
//   display: inline-block;
//   margin: 0 5px;
//   outline: none;
//   padding: 5px;
//   transition: all .2s ease-out
// }

// @media(max-width: 768px) {
//   .image-gallery-bullets .image-gallery-bullet {
//     margin: 0 3px;
//     padding: 3px
//   }
// }

// @media(max-width: 480px) {
//   .image-gallery-bullets .image-gallery-bullet {
//     padding: 2.7px
//   }
// }

// .image-gallery-bullets .image-gallery-bullet:focus {
//   transform: scale(1.2);
//   background: #337ab7;
//   border: 1px solid #337ab7
// }

// .image-gallery-bullets .image-gallery-bullet.active {
//   transform: scale(1.2);
//   border: 1px solid #fff;
//   background: #fff
// }

// @media(hover: hover)and (pointer: fine) {
//   .image-gallery-bullets .image-gallery-bullet:hover {
//     background: #337ab7;
//     border: 1px solid #337ab7
//   }

//   .image-gallery-bullets .image-gallery-bullet.active:hover {
//     background: #337ab7
//   }
// }

// .image-gallery-bullets.image-gallery-bullets-vertical {
//   left: 20px;
//   right: auto;
//   bottom: auto;
//   width: auto;
//   top: 50%;
//   transform: translateY(-50%)
// }

// .image-gallery-bullets.image-gallery-bullets-vertical .image-gallery-bullet {
//   display: block;
//   margin: 12px 0
// }

// @media(max-width: 768px) {
//   .image-gallery-bullets.image-gallery-bullets-vertical .image-gallery-bullet {
//     margin: 6px 0px;
//     padding: 3px
//   }
// }

// @media(max-width: 480px) {
//   .image-gallery-bullets.image-gallery-bullets-vertical .image-gallery-bullet {
//     padding: 2.7px
//   }
// }

// .image-gallery-thumbnails-wrapper {
//   position: relative
// }

// .image-gallery-thumbnails-wrapper.thumbnails-swipe-horizontal {
//   touch-action: pan-y
// }

// .image-gallery-thumbnails-wrapper.thumbnails-swipe-vertical {
//   touch-action: pan-x
// }

// .image-gallery-thumbnails-wrapper.thumbnails-wrapper-rtl {
//   direction: rtl
// }

// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left,
// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right {
//   display: inline-block;
//   vertical-align: top;
//   width: 100px
// }

// @media(max-width: 768px) {

//   .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left,
//   .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right {
//     width: 81px
//   }
// }

// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails,
// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails {
//   height: 100%;
//   width: 100%;
//   left: 0;
//   padding: 0;
//   position: absolute;
//   top: 0
// }

// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails .image-gallery-thumbnail,
// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails .image-gallery-thumbnail {
//   display: block;
//   margin-right: 0;
//   padding: 0
// }

// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail,
// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail {
//   margin-left: 0;
//   margin-top: 2px
// }

// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left,
// .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right {
//   margin: 0 5px
// }

// @media(max-width: 768px) {

//   .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left,
//   .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right {
//     margin: 0 3px
//   }
// }

// .image-gallery-thumbnails {
//   overflow: hidden;
//   padding: 5px 0
// }

// @media(max-width: 768px) {
//   .image-gallery-thumbnails {
//     padding: 3px 0
//   }
// }

// .image-gallery-thumbnails .image-gallery-thumbnails-container {
//   cursor: pointer;
//   text-align: center;
//   white-space: nowrap
// }

// .image-gallery-thumbnail {
//   display: inline-block;
//   border: 4px solid rgba(0, 0, 0, 0);
//   transition: border .3s ease-out;
//   width: 100px;
//   background: rgba(0, 0, 0, 0);
//   padding: 0
// }

// @media(max-width: 768px) {
//   .image-gallery-thumbnail {
//     border: 3px solid rgba(0, 0, 0, 0);
//     width: 81px
//   }
// }

// .image-gallery-thumbnail+.image-gallery-thumbnail {
//   margin-left: 2px
// }

// .image-gallery-thumbnail .image-gallery-thumbnail-inner {
//   display: block;
//   position: relative
// }

// .image-gallery-thumbnail .image-gallery-thumbnail-image {
//   vertical-align: middle;
//   width: 100%;
//   line-height: 0
// }

// .image-gallery-thumbnail.active,
// .image-gallery-thumbnail:focus {
//   outline: none;
//   border: 4px solid #337ab7
// }

// @media(max-width: 768px) {

//   .image-gallery-thumbnail.active,
//   .image-gallery-thumbnail:focus {
//     border: 3px solid #337ab7
//   }
// }

// @media(hover: hover)and (pointer: fine) {
//   .image-gallery-thumbnail:hover {
//     outline: none;
//     border: 4px solid #337ab7
//   }
// }

// @media(hover: hover)and (pointer: fine)and (max-width: 768px) {
//   .image-gallery-thumbnail:hover {
//     border: 3px solid #337ab7
//   }
// }

// .image-gallery-thumbnail-label {
//   box-sizing: border-box;
//   color: #fff;
//   font-size: 1em;
//   left: 0;
//   line-height: 1em;
//   padding: 5%;
//   position: absolute;
//   top: 50%;
//   text-shadow: 0 2px 2px hsl(0, 0%, 10%);
//   transform: translateY(-50%);
//   white-space: normal;
//   width: 100%
// }

// @media(max-width: 768px) {
//   .image-gallery-thumbnail-label {
//     font-size: .8em;
//     line-height: .8em
//   }
// }

// .image-gallery-index {
//   background: rgba(0, 0, 0, .4);
//   color: #fff;
//   line-height: 1;
//   padding: 10px 20px;
//   position: absolute;
//   right: 0;
//   top: 0;
//   z-index: 4
// }

// @media(max-width: 768px) {
//   .image-gallery-index {
//     font-size: .8em;
//     padding: 5px 10px
//   }
// }



// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/thumbs";
// import "swiper/css/autoplay";
// import "./styles.css"; // Optional: add custom styling here

// const images = [
//   { src: "/images/img1.jpg", alt: "Image 1" },
//   { src: "/images/img2.jpg", alt: "Image 2" },
//   { src: "/images/img3.jpg", alt: "Image 3" },
//   { src: "/images/img4.jpg", alt: "Image 4" },
//   { src: "/images/img5.jpg", alt: "Image 5" }
// ];

// export default function CoverflowGallery() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="gallery-container">
//       {/* Main Coverflow Slider */}
//       <Swiper
//         modules={[EffectCoverflow, Autoplay, Thumbs]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false
//         }}
//         loop={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         className="main-swiper"
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <img src={img.src} alt={img.alt} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnails */}
//       <Swiper
//         modules={[Thumbs]}
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={5}
//         freeMode={true}
//         watchSlidesProgress={true}
//         className="thumb-swiper"
//       >
//         {images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <img src={img.src} alt={`Thumb ${img.alt}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




// // import TheGreenRoad from "./assets/images/TheLand/TheGreenRoad.webp";
// // import WaveShadow from "./assets/images/TheLand/WaveShadow.webp";
// // import BeyondTheForest from "./assets/images/TheLand/BeyondTheForest.webp";
// // import ColorsOfZion from "./assets/images/TheLand/ColorsOfZion.webp";
// // import HalfDome from "./assets/images/TheLand/HalfDome.webp";
// // import FallingLikeTheClouds from "./assets/images/TheLand/FallingLikeTheClouds.webp";
// // import MontgomeryHills from "./assets/images/TheLand/MontgomeryHills.webp";
// // import StairwayToHeavenlyRainbows from "./assets/images/TheLand/StairwayToHeavenlyRainbows.webp";
// // import LetTheRythmFlow from "./assets/images/TheLand/LetTheRythymFlow.webp";
// // import Makua from "./assets/images/TheLand/Makua.webp";
// // import FieldOfProsperity from "./assets/images/TheLand/FieldofProsperity.webp";
// // import Greenery from "./assets/images/TheLand/Greenery.webp";
// // import LanikaiDreamsicle from "./assets/images/TheLand/LanikaiDreamsicle.webp";
// // import MakapuuDreaming from "./assets/images/TheLand/MakapuuDreaming.webp";
// // import Path2Koolau from "./assets/images/TheLand/Path2Koolau.webp";
// // import PeacefulSerenity from "./assets/images/TheLand/PeacefulSerenity.webp";
// // import ThePotOfGold from "./assets/images/TheLand/ThePotOfGold.webp";

// // const theLand = [TheGreenRoad,WaveShadow,BeyondTheForest,ColorsOfZion,HalfDome,FallingLikeTheClouds,
// //     MontgomeryHills,StairwayToHeavenlyRainbows, LetTheRythmFlow,Makua, FieldOfProsperity,
// //     Greenery, LanikaiDreamsicle, MakapuuDreaming, Path2Koolau, PeacefulSerenity,ThePotOfGold
// // ];

// // const theLandGallery = theLand.map((image)={
// //     original: image,
// //     thumbnail: image
// // });

// // import KahalaCoastin from './assets/images/TheSea/KahalaCoastin.webp';
// // import TropicalMist from './assets/images/TheSea/TropicalMist.webp';
// // import Crystalized from './assets/images/TheSea/Crystalized.webp';
// // import Molecular from './assets/images/TheSea/Molecular.webp';
// // import TheBluesRoom from './assets/images/TheSea/TheBluesRoom.webp';
// // // import from './assets/immages/TheSea/UnderwaterRays.webp';
// // import WadingCalmly from './assets/images/TheSea/WadingCalmly.webp';
// // import ElectricFish from './assets/images/TheSea/ElectricFish.webp';
// // import CrystalWall from './assets/images/TheSea/CrystalWall.webp';
// // import OceanLove from './assets/images/TheSea/OceanLove.webp';
// // import AlongTheReef from './assets/images/TheSea/AlongTheReef.webp';
// // import BreakfastBarrell from './assets/images/TheSea/BreakfastBarrell.webp';
// // import SeaRipples from './assets/images/TheSea/SeaRipples.webp';
// // import Reset from './assets/images/TheSea/Reset.webp';
// // import ReoccurringDream from './assets/images/TheSea/ReoccurringDream.webp';
// // import ParadiseBlue from './assets/images/TheSea/ParadiseBlue.webp';
// // import Yokes from './assets/images/TheSea/Yokes.webp';

// // import Refresh from './assets/images/TheSea/Refresh.webp';

// // import RedTracks from './assets/images/TheSea/RedTracks.webp';
// // import BlueDream from './assets/images/TheSea/BlueDream.webp';
// // import AngelOfTheSea from './assets/images/TheSea/AngelOfTheSea.webp';

// // import ParadiseOrangeDream from './assets/images/TheSea/ParadiseOrangeDream.webp';
// // import ChinaMansHat from './assets/images/TheSea/ChinaMansHat.webp';

// // const theSea = [KahalaCoastin, ParadiseOrangeDream, TropicalMist, Crystalized,
// //     Molecular, WadingCalmly, ElectricFish, SeaRipples, AlongTheReef, CrystalWall,
// //     OceanLove, TheBluesRoom,  BreakfastBarrell, UnderwaterRays, Reset,Yokes,
// //     ParadiseBlue, ReoccurringDream, Refresh
// // ];

// // const theSeaV = [AngelOfTheSea,RedTracks, BlueDream,ChinaMansHat];
// // const theSeaVerticals = theSeaV.map((image)=> ({
// //     original:image,
// //     thumbnail:image,
// // }))
// // const theSeaGallery = theSea.map((image)=> ({
// //      original:image,
// //      thumbnail:image,
// // }));

// // import img01 from './assets/images/Portraits/01.webp';
// // import img02 from './assets/images/Portraits/02.webp';
// // import img03 from './assets/images/Portraits/03.webp';
// // import img04 from './assets/images/Portraits/04.webp';
// // import img05 from './assets/images/Portraits/05.webp';
// // import img06 from './assets/images/Portraits/06.webp';
// // import img07 from './assets/images/Portraits/07.webp';
// // import img08 from './assets/images/Portraits/08.webp';
// // import img09 from './assets/images/Portraits/09.webp';
// // import img10 from './assets/images/Portraits/10.webp';
// // import img11 from './assets/images/Portraits/11.webp';
// // import img12 from './assets/images/Portraits/12.webp';
// // import img13 from './assets/images/Portraits/13.webp';
// // import img14 from './assets/images/Portraits/14.webp';
// // import img15 from './assets/images/Portraits/15.webp';
// // import img16 from './assets/images/Portraits/16.webp';
// // import img17 from './assets/images/Portraits/17.webp';
// // import img18 from './assets/images/Portraits/18.webp';
// // import img19 from './assets/images/Portraits/19.webp';
// // import img20 from './assets/images/Portraits/20.webp';
// // import img21 from './assets/images/Portraits/21.webp';
// // import img22 from './assets/images/Portraits/22.webp';
// // import img23 from './assets/images/Portraits/23.webp';
// // import img24 from './assets/images/Portraits/24.webp';
// // import img25 from './assets/images/Portraits/25.webp';
// // import img26 from './assets/images/Portraits/26.webp';
// // import img27 from './assets/images/Portraits/27.webp';

// // const portraits = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27];

// // export const portaitsGalleryImage = portraits.map((image)=> ({
// //     original: image,
// //     thumbnail, image
// // }));



