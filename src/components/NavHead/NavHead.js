import React from "react";
import { Form, Button } from "react-bootstrap";
import "./NavHead.scss";
export default function NavHead() {
  return (
    <div className="navhead d-flex align-items-center justify-content-between">
      <div className="head-wrapper">
        <h2>Welcome, Afif</h2>
        <p>Discover whatever you need easily</p>
      </div>
      <div className="filter-wrapper d-flex gap-4">
        <Form className="d-flex" variant="light">
          <i className="bi bi-search border-0 bg-light rounded-start d-flex justify-content-center align-items-center py-2 px-3" />

          <Form.Control
            type="search"
            placeholder="Search"
            className="Search me-2 border-0 bi bi-search bg-light"
            aria-label="Search"
          />
        </Form>
        <Button variant="primary" className="bg-white border-0">
          <i className="bi bi-funnel rounded p-2 fs-5 justify-content-center align-items-center" />
        </Button>
      </div>
    </div>
  );
}
