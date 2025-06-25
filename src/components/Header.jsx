import React, {useState,useRef} from 'react';
import swissLogo from '../assets/swissLogo.png';
import Button from './Button';
export default function Header({menuItems, onLogoClick, onMenuClick, onMenuLink,clickedItem, ref, ...props}) {
   const linkRef = useRef();
    const [menuClicked, setMenuClicked] = useState(false);

    function handleMenuItem(event) {
        setMenuClicked(false);
        const clickedItem = event.target.value;
        onMenuLink(clickedItem);
    }

    return ( <> <header
        className="fixed top-0 z-50 w-full bg-brand text-white flex items-center justify-between shadow-md mx-0 px-2 py-2">
            {/* REGULAR MENU */}
        <div className="justify-items-start">
            <img 
            className={`h-[4rem] sm:hidden hover:cursor-pointer ${menuClicked && 'duration-300 ease-in-out w-[8rem] h-[8rem] pb-2'}`} 
            src={swissLogo} onClick={onLogoClick}/>
            <ul className="p-[2rem] hidden sm:flex sm:gap-4 flex-row gap-10 items-center h-[2rem] w-lg:hidden">
                {menuItems.map((item,itemIndex)=> (
                    <li key={itemIndex}>
                        <Button 
                        className="duration-300 ease-in-out text-xl font-thin text-swiss hover:text-white hover:font-bold"
                        btnLink={item.link} 
                        btnName={item.name}
                        value={item.name}
                        onClick={handleMenuItem} 
                        ref={linkRef}
                        />
                        </li>
                ))}
            </ul>
        </div>
        <div className="justify-items-end">
            {/*SMALL MENU!!! */}
            <div className="sm:hidden">
                <button
                    className="text-gray-700 focus:outline-none sm:hidden"
                    onClick={() => setMenuClicked(!menuClicked)}>
                    <svg
                        className="w-10 h-8"
                        fill="none"
                        stroke={`${menuClicked
                        ? "white"
                        : "#F1E8E0"}`}
                        viewBox="0 0 20 20">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            <nav>

                <ul>
                    <li
                        className={`${menuClicked
                        ? 'duration-300 ease-in-out pt-4 sm:pb-4 text-end display sm:hidden'
                        : ''}`}>
                        {menuClicked && menuItems.map((item, itemIndex) => (
                            <ul key={itemIndex}>
                                <li>
                                <Button 
                                ref={linkRef}
                                onClick={handleMenuItem} 
                                className="duration-300 ease-in-out text-swiss font-thin hover:text-white hover:font-bold text-xl" 
                                value={item.name}
                                btnLink={item.link} 
                                btnName={item.name}/>
                                </li></ul>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>

    </header> </>
     )
}