import React, { useEffect, useState } from "react";
import categoryData from '../api/data'

export default function Categories() {

    const [categories, setCategories] = useState([])
   
    useEffect(() => {
      setCategories(categoryData)
    }, [])
    
  return (
    <div>
      <div className="flex flex-row translate-y-40 justify-center">
        <div className="mr-7 text-white font-semibold text-lg">All</div>
      </div>
    </div>
  );
}
