import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch=useDispatch();
  
  const cartToggle=()=>{
    dispatch(uiActions.isToggle())
  }

  return (
    <button onClick={cartToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
