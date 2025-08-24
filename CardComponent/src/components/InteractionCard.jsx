import React, { useState } from 'react';
import { FaHeart, FaShareAlt, FaChevronDown, FaEllipsisV } from 'react-icons/fa';

export default function InteractionCard({ title, date, info, img }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
            <div className="max-w-sm w-[345px] rounded overflow-hidden shadow-lg bg-white">
                {/* Card Header */}
                <div className="flex items-center justify-between px-4 pt-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            R
                        </div>
                        <div>
                            <div className="font-semibold">{title}</div>
                            <div className="text-sm text-gray-500">{date}</div>
                        </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                        <FaEllipsisV />
                    </button>
                </div>

                {/* Image */}
                <img
                    className="w-full h-48 object-cover mt-4"
                    src={img}
                    alt="Paella dish"
                />

                {/* Card Content */}
                <div className="px-4 py-4">
                    <p className="text-gray-700 text-sm">
                        {info}
                    </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between px-4 pb-2 my-4">
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-red-500">
                            <FaHeart />
                        </button>
                        <button className="text-gray-500 hover:text-blue-500">
                            <FaShareAlt />
                        </button>
                    </div>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''
                            } text-gray-500`}
                        aria-expanded={expanded}
                    >
                        <FaChevronDown />
                    </button>
                </div>

                {/* Expandable Content */}
                {expanded && (
                    <div className="px-4 pb-4 text-sm text-gray-700">
                        <p className="font-semibold mb-2">Method:</p>
                        <p className="mb-2">
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                            set aside for 10 minutes.
                        </p>
                        <p className="mb-2">
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                            stirring occasionally until lightly browned, 6 to 8 minutes.
                            Transfer shrimp to a large plate and set aside, leaving chicken and
                            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                            onion, salt and pepper, and cook, stirring often until thickened and
                            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
                            cups chicken broth; bring to a boil.
                        </p>
                        <p className="mb-2">
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is
                            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
                            shrimp and mussels, tucking them down into the rice, and cook again
                            without stirring, until mussels have opened and rice is just tender,
                            5 to 7 minutes more. (Discard any mussels that don't open.)
                        </p>
                        <p>
                            Set aside off of the heat to let rest for 10 minutes, and then
                            serve.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
