import React from "react";
import { useFood } from "../../contexts/FoodContext";

export default function FoodMenu() {
  const [foods, setFoods] = useFood([]);

  console.log(foods);
  return (
    <div>
      {foods.map((data) => {
        return <div>{data.name}</div>; 
      }
      
      )}
    </div>
  );
}
