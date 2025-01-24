import React, { useEffect, useState, useCallback } from 'react';
import image1 from '../assest/banner/img1.webp';
import image2 from '../assest/banner/img2.webp';
import image3 from '../assest/banner/img3.jpg';
import image4 from '../assest/banner/img4.jpg';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % desktopImages.length); // Loop back to the first image
  }, [desktopImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + desktopImages.length) % desktopImages.length); // Loop back to the last image
  }, [desktopImages.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextImage]);

  return (
    <div className="container mx-auto px-4 rounded">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        {/** Navigation Buttons */}
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full text-2xl">
            <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/** Desktop and Tablet Version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all duration-500"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/** Mobile Version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all duration-500"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
