import React from "react";
import BadgeList from "../../components/BadgeList/BadgeList";
import CardList from "../../components/CardList/CardList";
import CurrentOrder from "../../components/CurrentOrder/CurrentOrder";
import NavHead from "../../components/NavHead/NavHead";
import { useSelector } from "react-redux";
import "./Menu.scss";

export default function Menu() {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <>
      <div className="p-4 d-flex flex-column bg-body w-70">
        <NavHead />
        <BadgeList />
        <CardList />
      </div>
      <CurrentOrder />
    </>
  );
}
