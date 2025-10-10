import React from 'react';

const layoutPattern = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
];

const QuiltedImageGrid = ({ images }) => {
  return (
    <div className="max-h-[450px] w-[35%] overflow-y-scroll p-4">
      <div className="grid grid-cols-4 auto-rows-[150px] gap-1">
        {images.map((image, index) => {
          const { colSpan, rowSpan } = layoutPattern[index % layoutPattern.length]; // loop pattern
          return (
            <div
              key={index}
              className={`col-span-${colSpan} row-span-${rowSpan} overflow-hidden rounded`}
            >
              <img
                src={image}
                alt={`Quilted Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuiltedImageGrid;
