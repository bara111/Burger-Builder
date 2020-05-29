import React from "react";

import clasess from "./Burger.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} types={igKey} />;
      });
    });
    return (
      <div className={clasess.Burger}>
        <BurgerIngredient types="bread-top" />
        {transformedIngredients}
        <BurgerIngredient types="bread-bottom" />
      </div>
    );
};
export default burger;
