import React from 'react';

const WovenImageList = ({ images }) => {
  return (
    <div className="max-h-[450px] w-[35%] overflow-y-scroll p-4">
      <div className="grid grid-cols-3 gap-1  bg-white ">
        {images.map((img, index) => {
          // Determine row: each row has 3 items
          const row = Math.floor(index / 3);
          const positionInRow = index % 3;

          // Woven pattern: short image in middle on even rows, on sides in odd rows
          const isShort =
            (row % 2 === 0 && positionInRow === 1) || // middle image is short in even rows
            (row % 2 === 1 && positionInRow !== 1);   // side images are short in odd rows

          return (
            <div
              key={index}
              className={`overflow-hidden${
                isShort ? 'aspect-[4/4] my-10' : 'aspect-[4/6]'
              }`}
            >
              <img
                src={img}
                alt={`Woven Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WovenImageList;
