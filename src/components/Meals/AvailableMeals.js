import { useContext } from 'react';
import MealItem from '../Meals/MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import CartContext from '../../store/cart-context';

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  const addCartItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <section className={classes.meals}>
      <ul>
        <MealItem
          id="m1"
          name="Sushi"
          description="Finest fish and veggies"
          price={22.99}
          onAddToCart={addCartItemHandler}
        />
        <MealItem
          id="m2"
          name="Schnitzel"
          description="A German specialty!"
          price={16.5}
          onAddToCart={addCartItemHandler}
        />
        <MealItem
          id="m3"
          name="Barbecue Burger"
          description="American, raw, meaty"
          price={12.99}
          onAddToCart={addCartItemHandler}
        />
        <MealItem
          id="m4"
          name="Green Bowl"
          description="Healthy...and green..."
          price={18.99}
          onAddToCart={addCartItemHandler}
        />
      </ul>
    </section>
  );
};

export default AvailableMeals;
