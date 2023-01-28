import React, { useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import items from "../api/data";

export default function HomePage() {
  const allCategories = ["Tümü", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "Tümü") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="w-full h-full bg-orange-500 flex flex-col ">
      <div className="text-2xl md:text-3xl text-white font-bold underline underline-offset-8 mt-16">
        Burger Menu
      </div>
      {/* Categories */}
      <div className="mt-16">
        <Categories categories={categories} filterItems={filterItems} />
      </div>

      {/* Foods */}
      <div className="mt-10">
        <Menu items={menuItems} />
      </div>
    </div>
  );
}
