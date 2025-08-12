import React, { useState } from "react";
import AllCoffeeCard from "../Modules/AllCoffeeCard";
import { useLoaderData } from "react-router-dom";

const Menu = () => {
  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);
  return (
    <div>
      {/* Coffee Cards */}
      <div className="relative z-10 bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-center ">
            Our Popular Products
          </h3>
          <AllCoffeeCard coffees={coffees} setCoffees={setCoffees} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
