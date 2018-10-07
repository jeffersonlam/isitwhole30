import React from 'react';
import FoodListItem from './food_list_item';
import '../styles/food_list.scss';

const FoodList = props => {
  let foodListItems = props.foods.map(food => {
    return (
      <FoodListItem
      key={food.name}
      food={food}
      />
    );
  });

  if (!foodListItems.length) foodListItems = 'No results found';

  return (
    <ul className="food-list">
      {foodListItems}
    </ul>
  );
}

export default FoodList;
