import React, { useState } from "react";
import BadgeList from "../../components/BadgeList/BadgeList";
import CardList from "../../components/CardList/CardList";
import CurrentOrder from "../../components/CurrentOrder/CurrentOrder";
import NavHead from "../../components/NavHead/NavHead";
import { useSelector } from "react-redux";
import "./Menu.scss";

export default function Menu() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const { productItems } = useSelector((state) => state.product);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = productItems.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(productItems);
    }
  };

  return (
    <>
      <div className="p-4 d-flex flex-column bg-body w-70">
        <NavHead searchItems={searchItems} />
        <BadgeList />
        <CardList
          searchInput={searchInput}
          productItems={productItems}
          filteredResults={filteredResults}
        />
      </div>
      <CurrentOrder />
    </>
  );
}
