import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

let globalState = { cartItems: [] };

export const cartReducer = (state = globalState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((obj, i) =>
            obj.id === existItem.id
              ? {
                  ...obj,
                  qty: existItem.qty + 1,
                }
              : { ...obj }
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      const deleteTarget = state.cartItems.find((i) => i.id === action.payload);
      if (deleteTarget && deleteTarget.qty > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((obj, i) =>
            obj.id === deleteTarget.id
              ? {
                  ...obj,
                  qty: deleteTarget.qty - 1,
                }
              : {
                  ...obj,
                }
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        };
      }

    default:
      return state;
  }
};
