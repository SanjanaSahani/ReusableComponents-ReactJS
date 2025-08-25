import React from 'react'
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

function UIControlsCard({title, subtitle, img}) {
    const isRtl = false;
    return (
        <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
            <div className="flex bg-white shadow-md rounded overflow-hidden max-w-md">
                {/* Left Side: Text + Controls */}
                <div className="flex flex-col justify-between">
                    {/* Text */}
                    <div className="p-4">
                        <h5 className="text-xl font-semibold">{title}</h5>
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center pl-4 pb-4 space-x-4">
                        <button
                            aria-label="previous"
                            className="p-2 hover:bg-gray-100 rounded-full transition"
                        >
                            {isRtl ? <FaStepForward size={20} /> : <FaStepBackward size={20} />}
                        </button>
                        <button
                            aria-label="play/pause"
                            className="p-2 hover:bg-gray-100 rounded-full transition"
                        >
                            <FaPlay size={26} />
                        </button>
                        <button
                            aria-label="next"
                            className="p-2 hover:bg-gray-100 rounded-full transition"
                        >
                            {isRtl ? <FaStepBackward size={20} /> : <FaStepForward size={20} />}
                        </button>
                    </div>
                </div>

                {/* Right Side: Album Cover */}
                <img
                    className="w-[151px] object-cover"
                    src={img}
                    alt="Live from space album cover"
                />
            </div>
            
        </div>
    )
}

export default UIControlsCard;