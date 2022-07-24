import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { badgeList } from "../../constant";
import "./BadgeList.scss";
export default function BadgeList() {
  const [radioValue, setRadioValue] = useState("all");

  return (
    <div className="badge-wrapper d-flex gap-4 my-3 flex-wrap">
      {badgeList.map((item, index) => (
        <ToggleButton
          key={index}
          className="badge-list px-4 py-2 fw-bolder shadow-sm"
          id={`radio-${index}`}
          type="radio"
          name="radio"
          variant="flat"
          value={item.name}
          checked={radioValue === item.name}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          {item.name}
        </ToggleButton>
      ))}
    </div>
  );
}
