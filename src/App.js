import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';


let isInitial=true;

function App() {
  const dispatch=useDispatch();
  const isToggle=useSelector(state=>state.ui.cartIsVisible);
  const cart=useSelector(state=> state.cart);
  const notification=useSelector(state=>state.ui.notification)
  useEffect(()=>{
    const sendCartdata=async()=>{
      dispatch(uiActions.showNotification({
        status :'Pending',
        title: 'Sending',
        message: 'Sending Cart Data...'
      }))
      const response = await fetch('https://redux-toolkit-e5a54-default-rtdb.firebaseio.com/cart.json',{method:'PUT', body:JSON.stringify(cart)})
     if(!response.ok){
      throw new Error('Something Went wrong');
     }
     dispatch(uiActions.showNotification({
      status :'success',
      title: 'Success',
      message: 'Send cart Data successfully'
    }))
     
    }
  
    if(isInitial){
      isInitial=false;
      return;
    }

    sendCartdata().catch((error)=>{
      dispatch(uiActions.showNotification({
        status :'error',
        title: 'Error',
        message: 'Sending Cart Data Failed!'
      }))
    })
   
    
  },[cart,dispatch])

  return (
  <>
  {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
