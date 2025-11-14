import React, { useState } from "react";

export default function AddTransitionGroup() {
  const ALL_FRUITS = [
    { id: 1, name: "Apple", emoji: "🍏" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Pineapple", emoji: "🍍" },
    { id: 4, name: "Mango", emoji: "🥭" },
    { id: 5, name: "Grapes", emoji: "🍇" },
    { id: 6, name: "Orange", emoji: "🍊" },
    { id: 7, name: "Strawberry", emoji: "🍓" },
    { id: 8, name: "Watermelon", emoji: "🍉" },
    { id: 9, name: "Cherry", emoji: "🍒" },
    { id: 10, name: "Peach", emoji: "🍑" },
  ];

  const [fruits, setFruits] = useState([]);
  const [removing, setRemoving] = useState(null);

  const addFruit = () => {
    const remaining = ALL_FRUITS.filter(
      (f) => !fruits.some((added) => added.id === f.id)
    );
    if (remaining.length > 0) {
      setFruits([...fruits, remaining[0]]);
    }
  };

  const removeFruit = (id) => {
    setRemoving(id);

    // Allow CSS animation to play
    setTimeout(() => {
      setFruits(fruits.filter((f) => f.id !== id));
      setRemoving(null);
    }, 200);
  };

  const allAdded = fruits.length === ALL_FRUITS.length;

  return (
    <>
      {/* Inline styles (no external file needed) */}
      <style>{`
        .item-enter {
          opacity: 0;
          transform: translateY(-6px);
        }
        .item-enter-active {
          opacity: 1;
          transform: translateY(0px);
          transition: all 200ms ease-out;
        }
        .item-exit {
          opacity: 1;
          transform: translateY(0px);
        }
        .item-exit-active {
          opacity: 0;
          transform: translateY(6px);
          transition: all 200ms ease-out;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center min-h-[500px] gap-4 bg-gray-100">
        <button
          onClick={addFruit}
          disabled={allAdded}
          className={`px-6 py-2 rounded bg-blue-600 text-white font-semibold mb-6
            disabled:bg-gray-400 disabled:cursor-not-allowed transition`}
        >
          ADD FRUIT TO BASKET
        </button>

        <ul className="space-y-4 w-72">
          {fruits.map((fruit) => {
            const isExiting = removing === fruit.id;

            return (
              <li
                key={fruit.id}
                className={`flex justify-between items-center bg-white shadow px-4 py-3 rounded transition-all duration-200
                  ${isExiting ? "item-exit-active" : "item-enter-active"}`}
              >
                <span className="flex items-center space-x-2">
                  <span>{fruit.emoji}</span>
                  <span className="font-medium">{fruit.name}</span>
                </span>

                <button
                  onClick={() => removeFruit(fruit.id)}
                  className="text-gray-600 hover:text-red-600 transition"
                >
                  🗑
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
