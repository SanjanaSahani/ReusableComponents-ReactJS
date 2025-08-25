import React, { useState } from 'react';

const cards = [
    {
        id: 1,
        title: 'Plants',
        description: 'Plants are essential for all life.',
    },
    {
        id: 2,
        title: 'Animals',
        description: 'Animals are a part of nature.',
    },
    {
        id: 3,
        title: 'Humans',
        description: 'Humans depend on plants and animals for survival.',
    },
];

function ActiveStateStyleCard() {
    const [selectedCard, setSelectedCard] = useState(0);

    return (
        <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-w-[660px] mx-auto">

                {cards.map((card, index) => {
                    const isActive = selectedCard === index;

                    return (
                        <div
                            key={card.id}
                            className={`rounded-lg shadow-md transition-colors duration-200 ${isActive ? 'bg-blue-100 hover:bg-blue-200' : 'bg-white hover:bg-gray-100'
                                }`}
                        >
                            <button
                                onClick={() => setSelectedCard(index)}
                                className="w-full h-full text-left p-4 focus:outline-none"
                            >
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActiveStateStyleCard;
