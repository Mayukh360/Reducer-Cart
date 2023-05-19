import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData=async()=>{
            const response= await fetch("https://redux-toolkit-e5a54-default-rtdb.firebaseio.com/cart.json")
            if(!response.ok){
                throw new Error('Fetching data not Successful');
            }
            const data=await response.json();
            return data;
        }
        try{
        const cartData= await  fetchData();
        dispatch(cartActions.replaceCart(cartData))
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error",
                  message: "Fetching Cart Data Failed!",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "Sending",
          message: "Sending Cart Data...",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://redux-toolkit-e5a54-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
        if (!response.ok) {
          throw new Error("Something Went wrong");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Send cart Data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending Cart Data Failed!",
          })
        );
      }
    };
  };