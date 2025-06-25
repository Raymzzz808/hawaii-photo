import './App.css';
import {useState, useRef, useEffect} from 'react';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import PopUp from './components/PopUp.jsx';
import PhotoSessions from './components/PhotoSessions.jsx';
import Books from './components/Books.jsx';
import Button from './components/Button.jsx';
import phone from './assets/icons/phone.png';
import email from './assets/icons/email.png';
import Resume from './components/Resume.jsx';
import Cv from './components/CV.jsx';
import {menuItems,
     homeGalleryImages,
      theLandGallery,
      theSeaGallery,
       clientLogos,
        portraitsGallery,
        exhibitsPublications,
        artistImageGallery,
        surf,
        artistStatementBG,
        homeContent,
        otherBooks,
        bookImages,
        theLandCopy,
        homeSlide,
        theSeaCopy,
    about } from './AppContent.jsx';
import About from './components/About';
import aboutIcon from './assets/icons/aboutIcon.webp';
import Footer from './components/Footer.jsx';
import theLandIcon from './assets/icons/theLandIcon.webp';
import theSeaIcon from './assets/icons/theSeaIcon.webp';
import sessionsicon from './assets/icons/sessionsicon.webp';
import Molecular from './assets/images/TheSea/Molecular.webp';
import artistImage1 from './assets/images/Artist/artistImage1.webp';
import transparentLogo from './assets/transparentLogo.png';
import Contact from './components/Contact.jsx';

export default function App() {
    const contactRef = useRef();
    const resumeRef = useRef();
    const  cvRef = useRef();
    const [selectPage, setSelectPage] = useState({
        selectedPage: undefined,
        pageId: undefined,
    })

    //DISABLE RIGHT-CLICK:::
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    //MENU SELECT:::
    function handleMenuClick(clickedItem) {
        setSelectPage((prev)=>{
            return{
                ...prev,
                selectedPage: clickedItem,
            }
        });
    }
    //LogoClick
    function handleLogoClick(){
        setSelectPage((prev)=>{
            return {
                ...prev,
                selectedPage: "Home",
            }
        }); 
    }

 
    let content;
    if (selectPage.selectedPage ===  undefined || "Home"){
        content =  
        <Home 
        welcomeHeader="Honolulu Photographer"         
        logo={transparentLogo} 
        cardContent={homeContent}
        slideShowImages={homeSlide}
        imageList={homeGalleryImages}
        onViewContact={()=> contactRef.current.open()}
        onViewPhotoshoots={()=> setSelectPage((prev)=> {return {...prev,selectedPage:"Portraits"}})}
        />;
    }
    if (selectPage.selectedPage === "The Land"){
        content = <Portfolio 
        galleryIcon={theLandIcon}
        title="The Land"
        galleryDescription={theLandCopy}
        galleryImages ={theLandGallery}
        />;
    } if (selectPage.selectedPage === "The Sea"){
        content = <Portfolio
        galleryIcon={theSeaIcon}
        title= "The Sea"
        galleryDescription={theSeaCopy}
        galleryImages={theSeaGallery}/>;
    }
    if (selectPage.selectedPage === "Portraits"){
      content =  <PhotoSessions galleryIcon={sessionsicon}
      galleryImages={portraitsGallery}/>;
    }
    if (selectPage.selectedPage ===  "About"){
        content = <About
        aboutHeading="The Artist"
    aboutCopy={about[0].About}
    artistHeading="Artist Statement"
    artistStatement={about[0].ArtistStatement}
    artistName="Raymond Enriquez"
    artistImage = {artistImage1}
    artistGallery={artistImageGallery}
    coverImage={Molecular}
    galleryIcon={aboutIcon}
    clientLogos={clientLogos}
    artistStatementBG = {artistStatementBG}
    exhibitions = {exhibitsPublications}
    onRes ={() =>resumeRef.current.open()}
    onCV ={() => cvRef.current.open()}
    />;
    }
    if(selectPage.selectedPage === "Books"){
        content = <Books 
        bookImages={bookImages}
        galleryIcon={surf}
        title="Books"
        />;
    }
    if (selectPage.selectedPage === "Contact"){
        contactRef.current.open();  
    }

    return ( <div className="bg-white">
    <div className="w-full h-screen relative min-h-screen overflow-visible bg-white"> 
    <Header menuItems={menuItems} 
    onMenuLink={handleMenuClick} 
    onLogoClick={handleLogoClick}/> 
  {content}
  <Footer/>
    </div>

    <PopUp
    ref={contactRef}>
      <Contact email={email} phone={phone}/>
        </PopUp>

        <PopUp ref={resumeRef} buttonCaption="Close">
             <Resume/>
        </PopUp>
        
        <PopUp ref={cvRef} buttonCaption="Close">
            <Cv/>
            </PopUp>

  </div>
    )
}
