import React from "react";
import { Button } from "react-bootstrap";
import { badgeList } from "../../constant";
import "./BadgeList.scss";
export default function BadgeList() {
  return (
    <div className="badge-wrapper d-flex gap-4 my-3 flex-wrap">
      {badgeList.map((item, index) => (
        <Button
          key={index}
          variant="outline"
          className="badge-list px-4 py-2 fw-bolder bg-white shadow-sm"
          onClick={"#"}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
