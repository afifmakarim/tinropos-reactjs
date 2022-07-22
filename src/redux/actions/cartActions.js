import { cardList } from "../../constant";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

export const addToCart = (id, qty) => async (dispatch) => {
  const data = cardList.find((o) => o.id === id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data.id,
      name: data.name,
      price: data.price,
      qty,
    },
  });

  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch) => {
  console.log("id di actions: ", id);
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};
