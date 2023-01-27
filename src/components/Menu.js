import React from "react";

export default function Menu({ items }) {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2  container mx-auto mb-8  ">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <div className="flex flex-row justify-center my-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <div className="border-2 border-x-amber-900 md:w-48 md:h-40 w-48 h-48 shadow-lg">
                <img className="w-full h-full" src={img} alt={title} />
              </div>
              <div className="flex flex-col">
                <div className="grid gap-4 grid-cols-2 ml-4 mb-8 mt-4 md:mt-0">
                  <div className="underline font-semibold text-black text-left">
                    {title.charAt(0).toUpperCase() +
                      title.slice(1).toLowerCase()}
                  </div>
                  <div className=" underline font-semibold  text-black flex justify-end">
                    {price} $
                  </div>
                </div>
                <div className="w-80 text-left ml-4 font-sans text-white font-semibold">
                  {desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
