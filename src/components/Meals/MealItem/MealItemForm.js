import { useState } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amount;

    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="number"
        min="1"
        max="5"
        step="1"
        value={amount}
        onChange={amountChangeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
