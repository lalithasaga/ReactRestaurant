import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsList = cartCtx.items.map((item) => (
    <li key={item.id} className={classes['cart-item']}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.details}>
          <div className={classes.price}><strong>${item.price.toFixed(2)}</strong></div>
          <div className={classes.quantity}>
            <span className={classes.quantityValue}>x {item.amount}</span>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
        <button onClick={() => cartCtx.addItem({ ...item, amount: 1 })}>+</button>
      </div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItemsList.map((item, index) => (
          <li key={item.id} className={classes['cart-item']}>
            {item}
            {index !== cartItemsList.length - 1 && <hr className={classes.separator} />}
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
