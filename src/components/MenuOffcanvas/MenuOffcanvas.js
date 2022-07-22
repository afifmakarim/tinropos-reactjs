import React from "react";
import { Offcanvas } from "react-bootstrap";
import NavList from "../NavList/NavList";

export default function MenuOffcanvas({ show, handle }) {
  return (
    <Offcanvas show={show} onHide={handle}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        <NavList />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
