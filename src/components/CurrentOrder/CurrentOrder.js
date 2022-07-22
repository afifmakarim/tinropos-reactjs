import React from "react";
import CTA from "../CTA/CTA";
import OrderList from "../OrderList/OrderList";
import TotalSummary from "../TotalSummary/TotalSummary";
import { useSelector } from "react-redux";

import "./CurrentOrder.scss";

export default function CurrentOrder() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="c-order d-flex flex-column p-4">
      <h6 className="fw-bolder">Current Order</h6>
      <OrderList />
      <div className="d-flex flex-column justify-content-end h-100">
        <TotalSummary />
        <CTA disabled={cartItems.length === 0} />
      </div>
    </div>
  );
}
