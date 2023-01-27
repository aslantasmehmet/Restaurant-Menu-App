import React, {useState} from "react";

export default function Categories({ categories, filterItems  }) {

  const [activeCategory, setActiveCategory] = useState();

return (
    <div className="flex flex-row  justify-center">
    {categories.map((category, index) => {
      const isActive = activeCategory === category;
      return (
        <div>
          <button 
            style={{ borderBottom: isActive ? '2px solid black' : 'none' }}
            type="button"
            key={index}
            onClick ={() => { filterItems(category); setActiveCategory(category);}}
           className={`text-white font-semibold mx-6 ${isActive ? 'animate-underline':''}`}
            
            >
            {category.toUpperCase()}
          </button>
        </div>
      );
    })}
  </div>
);
}
