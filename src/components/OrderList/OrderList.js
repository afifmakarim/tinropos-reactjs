import React from "react";
import { Button } from "react-bootstrap";
//import { orderList } from "../../constant";
import "./OrderList.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import AmountFormatter from "../../utils/AmountFormatter";

export default function OrderList() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleItemsToCarts = (id) => {
    dispatch(addToCart(id, 1));
  };

  const removeItemsFromCarts = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="order d-flex flex-column gap-2 my-4 overflow-auto vh-100">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="order-item d-flex gap-2">
            <img
              className="order-item-img rounded-3"
              src={`https://picsum.photos/400?random=${index}`}
              alt=""
              srcset=""
            />
            <div className="order-details d-flex flex-column">
              <h6>{item.name}</h6>
              <p>{AmountFormatter.format(item.price)}</p>
            </div>
            <div className="d-flex align-items-center justify-content-end w-50">
              <Button
                size="sm"
                className="incr"
                onClick={() => handleItemsToCarts(item.id)}
              >
                +
              </Button>
              <span className="p-2 text-secondary">{item.qty}</span>
              <Button
                size="sm"
                className="decr"
                onClick={() => removeItemsFromCarts(item.id)}
              >
                -
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted d-flex justify-content-center">No Order yet</p>
      )}
    </div>
  );
}
