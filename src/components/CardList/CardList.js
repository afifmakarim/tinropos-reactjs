import React from "react";
import { Button } from "react-bootstrap";
import { cardList } from "../../constant";
import { useDispatch } from "react-redux";
import "./CardList.scss";
import { addToCart } from "../../redux/actions/cartActions";
import AmountFormatter from "../../utils/AmountFormatter";

export default function CardList() {
  const dispatch = useDispatch();

  const handleItemsToCarts = (id) => {
    console.log(id);
    dispatch(addToCart(id, 1));
  };

  return (
    <div className="menus">
      {cardList.map((item, index) => (
        <div
          className="menu-item border rounded-3 p-3 bg-white shadow-sm d-flex flex-column"
          key={index}
        >
          <div className="cart">
            <Button
              variant="outline"
              className="icon-cart rounded-3 px-2 m-2 text-primary shadow-sm"
              onClick={() => handleItemsToCarts(item.id)}
            >
              <i className="bi bi-cart-plus fs-5" />
            </Button>
          </div>
          <img
            className="rounded-3 w-100"
            src={`https://picsum.photos/400?random=${index}`}
            alt=""
          />
          <div className="menu-content d-flex flex-column justify-content-between h-100 mt-3">
            <h4 className="fs-4">{item.name}</h4>
            <p className="fs-6 fw-light">{item.description}</p>
            <h4 className="my-2">{AmountFormatter.format(item.price)}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
