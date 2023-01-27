import React from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-orange-500">
      <div className="text-3xl text-white font-bold underline underline-offset-8 translate-y-32">
        Our Menu
      </div>
      <Categories />

      {/* Foods */}
      <Menu/>
    </div>
  );
}
