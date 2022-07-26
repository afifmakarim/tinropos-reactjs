import React, { useState } from "react";
import MenuOffcanvas from "../MenuOffcanvas/MenuOffcanvas";
import "./Navbar.scss";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleOffcanvas = () => setShow(!show);

  return (
    <div className="navbar mx-4">
      <span
        className="hamburger bg-white fs-2 border px-2 rounded-2"
        onClick={handleOffcanvas}
      >
        <i className="bi bi-list"></i>
      </span>
      <h4 className="title fw-bolder">TinroPOS</h4>
      <MenuOffcanvas show={show} handle={handleOffcanvas} />
    </div>
  );
}
