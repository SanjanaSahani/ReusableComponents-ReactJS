import React from 'react';

const StandardImageList = ({images}) => {
  return (
    <div className="max-h-[450px] w-[35%] overflow-y-scroll p-4">
      <div className="grid grid-cols-3 gap-1">
        {images.map((src, index) => (
          <div key={index} className="aspect-square w-full bg-gray-100 overflow-hidden rounded">
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandardImageList;
