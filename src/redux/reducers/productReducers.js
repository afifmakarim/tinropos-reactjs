import { cardList } from "../../constant";

let globalState = { productItems: cardList };

export const productReducers = (state = globalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
