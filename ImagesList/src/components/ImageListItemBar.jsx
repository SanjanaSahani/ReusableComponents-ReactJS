import React from 'react';
import { FiInfo } from 'react-icons/fi';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
// make some changes in it 
function ImageListItemBar() {
 return (
    <div className="max-h-[450px] w-[35%]  overflow-y-scroll p-2 bg-white">
      <div className="grid grid-cols-2 gap-2 auto-rows-fr">
        {itemData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden  aspect-[4/3]  shadow-sm"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-black text-white px-2 py-1.5 flex flex-col justify-end">
              <div className="text-base font-semibold leading-4">{item.title}</div>
              <div className="text-xs opacity-80">{item.author}</div>
            </div>
            {/* Info icon */}
            <div className="absolute bottom-1.5 right-2 text-black font-bold text-md text-2xl opacity-80 bg-gray-100 rounded-full">
              <FiInfo />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageListItemBar;