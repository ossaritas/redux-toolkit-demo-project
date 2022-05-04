import { useDispatch, useSelector } from "react-redux";

import { uiAction } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQuantity}</span>
    </button>
  );
};

export default CartButton;
