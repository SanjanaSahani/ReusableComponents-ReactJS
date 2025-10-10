import React from "react";

const MasonryImageList = ({ images }) => {
  return (
    <div className="max-h-[600px] w-[35%] overflow-y-scroll p-4 bg-gray-100">
      <div className="grid grid-cols-3 gap-1 bg-white">
        {images.map((img, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;

          // Define pattern:
          // Even row: [Tall, Short, Tall]
          // Odd row:  [Short, Tall, Short]
          const isTall =
            (row % 2 === 0 && col !== 1) || (row % 2 === 1 && col === 1);

          return (
            <div
              key={index}
              className={`overflow-hidden ${
                isTall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
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

export default MasonryImageList;
