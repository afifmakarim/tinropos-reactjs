import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { navList } from "../../constant";
import { useLocation } from "react-router-dom";
import "./NavList.scss";

export default function NavList() {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column w-100"
      variant="primary"
    >
      {navList.map((item, index) => (
        <Nav.Link
          href={item.href}
          key={index}
          className="nav-items fs-4 mt-4"
          active={url === item.href ? true : false}
        >
          {item.icons}
        </Nav.Link>
      ))}
    </Nav>
  );
}
