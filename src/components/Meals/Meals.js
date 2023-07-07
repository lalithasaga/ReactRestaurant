import { Fragment, useContext } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import CartContext from '../../store/cart-context';

const Meals = () => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals onAddToCart={addToCartHandler} />
    </Fragment>
  );
};

export default Meals;
