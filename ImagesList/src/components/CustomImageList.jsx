import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const imageTitles = [
  'Breakfast',
  'Burger',
  'Camera',
  'Coffee',
  'Hats',
  'Honey',
  'Basketball',
  'Fern',
  'Mushrooms',
  'Tomato Basil',
  'Sea Star',
  'Bike',
];

const CustomImageList = ({ images }) => {
  return (
    <div className="max-h-[450px] w-[35%] overflow-y-scroll p-4 bg-white">
      <div className="grid grid-cols-4 auto-rows-[150px] gap-1">
        {images.map((imageSrc, index) => {
          let colSpan = 2; 
          let rowSpan = 1; 

          // Custom layout 
          if (index === 0 || index === 5) {
            colSpan = 4; // Full width
            rowSpan = 2;
          } else {
            colSpan = 2; // Half width (2 per row)
          }

          const title = imageTitles[index] || `Image ${index + 1}`;

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded col-span-${colSpan} row-span-${rowSpan}`}
            >
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
              {/* Overlay with title and icon */}
              <div className="absolute top-0 left-0 right-0 text-white px-2 py-1 flex gap-1">
                 <FaRegStar className="text-white text-sm m-1" />
                <div className="text-sm font-semibold">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomImageList;