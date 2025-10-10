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
  const getColClass = (span) => {
    if (span === 1) return 'col-span-1';
    if (span === 2) return 'col-span-2';
    if (span === 3) return 'col-span-3';
    if (span === 4) return 'col-span-4';
    return '';
  };

  const getRowClass = (span) => {
    if (span === 1) return 'row-span-1';
    if (span === 2) return 'row-span-2';
    if (span === 3) return 'row-span-3';
    if (span === 4) return 'row-span-4';
    return '';
  };

  return (
    <div className="max-h-[450px] w-[35%] overflow-y-scroll p-4">
      <div className="grid grid-cols-4 auto-rows-[150px] gap-1">
        {images.map((image, index) => {
          const { colSpan, rowSpan } = layoutPattern[index % layoutPattern.length];
          return (
            <div
              key={index}
              className={`overflow-hidden rounded ${getColClass(colSpan)} ${getRowClass(rowSpan)}`}
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
