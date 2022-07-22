import React from "react";
import NavList from "../NavList/NavList";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper d-flex flex-column align-items-center border">
      <div className="logo text-primary fs-4 border-bottom py-4">
        <h2>T</h2>
      </div>
      <NavList />
    </div>
  );
}
