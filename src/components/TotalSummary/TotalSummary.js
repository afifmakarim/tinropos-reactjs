import React from "react";
import { useSelector } from "react-redux";
import AmountFormatter from "../../utils/AmountFormatter";

import "./TotalSummary.scss";

export default function TotalSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  const discount = 0;

  const countTotal = () => {
    const sum = cartItems
      .map((item) => item.price * item.qty)
      .reduce((prev, curr) => prev + curr, 0);

    const actualPayment = sum;
    const discounted_price = actualPayment - (actualPayment * discount) / 100;

    return { discounted_price, sum };
  };

  return (
    <>
      <div className="summary bg-body p-4 d-flex flex-column fw-semibold border-bottom">
        <div className="d-flex justify-content-between">
          <span className="text-secondary">Subtotal</span>
          <span>
            {cartItems.length === 0
              ? "-"
              : AmountFormatter.format(countTotal().sum)}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-secondary">Discount Sales</span>
          <span>{discount} %</span>
        </div>
      </div>
      <div className="bg-body p-4 d-flex justify-content-between fw-bolder rounded-bottom rounded-3">
        <span>Total</span>
        <span>
          {cartItems.length === 0
            ? "-"
            : AmountFormatter.format(countTotal().discounted_price)}
        </span>
      </div>
    </>
  );
}
