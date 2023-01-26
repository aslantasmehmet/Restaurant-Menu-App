import React from "react";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-orange-500">
      <div className="text-3xl text-white font-bold underline underline-offset-8 translate-y-32">
        Our Menu
      </div>
      <div className="flex flex-row translate-y-40 justify-center">
        <div className="mr-7 text-white font-semibold text-lg">All</div>
        <div className="mr-7 text-white font-semibold text-lg">Breakfast</div>
        <div className="mr-7 text-white font-semibold text-lg">Lunch</div>
        <div className="text-white font-semibold text-lg">Shakes</div>
      </div>

      {/* Foods */}
      <div className="flex flex-row translate-y-48 justify-center ml-24 mt-8">
        <div className="mr-16 grid grid-rows-3 grid-flow-col gap-4">
          <div className="border-4 border-amber-700 w-72 h-56 row-span-3 shadow-xl rounded">
            <img
              className="w-full h-full"
              src="https://raw.githubusercontent.com/ececmk/menu-with-react/master/public/images/item-1.jpeg"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-row text-white font-semibold  underline text-lg ">
              <div className="mr-10 ">Buttermilk Pancakes</div>
              <div>119.90TL</div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 w-80 text-left text-white font-semibold text-base">
            I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
            freegan copper mug whatever cold-pressed
          </div>
        </div>
      </div>
    </div>
  );
}
