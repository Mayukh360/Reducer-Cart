import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch, useSelector } from 'react-redux';


const CartButton = (props) => {
  const dispatch=useDispatch();
 const totalQuantity= useSelector(state=>state.cart.totalquantity)
  
  const cartToggle=()=>{
    dispatch(uiActions.isToggle())
  }

  return (
    <button onClick={cartToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
