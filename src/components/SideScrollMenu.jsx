import React, { useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function SideScrollBar(){
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setShow(scrollY > 300);
  };

  return (
    <div className="bg-brand z-50 overflow-hidden justify-center items-center flex-col flex fixed right-0 h-60 w-20 mt-20 rounded-bl-lg rounded-tl-lg ">

    </div>
  );
};

