import React, { Component } from "react";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuilderConstrols from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = { salad: 0.4, bacon: 0.5, cheese: 0.4, meat: 0.7 };
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };
  removeIngredientsHandler = (type) => {};
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuilderConstrols
          ingredientAdded={this.addIngredientHandler}></BuilderConstrols>
      </Aux>
    );
  }
}
export default BurgerBuilder;
