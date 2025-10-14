import React from "react";

const MasonryImageList = ({ images }) => {
  return (
    <div className="max-h-[600px] w-[35%] overflow-y-scroll p-4 bg-gray-100">
      <div className="columns-3 gap-1">
        {images.map((img, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;

          const isTall = Math.random() > 0.5;
          const heightClass = isTall ? "h-64" : "h-40";

          return (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className={`w-full mb-1 rounded object-cover ${heightClass}`}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MasonryImageList;
