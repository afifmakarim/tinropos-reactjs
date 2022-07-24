import React, { useState } from "react";
import BadgeList from "../../components/BadgeList/BadgeList";
import CardList from "../../components/CardList/CardList";
import CurrentOrder from "../../components/CurrentOrder/CurrentOrder";
import NavHead from "../../components/NavHead/NavHead";
import { useSelector } from "react-redux";
import "./Menu.scss";

export default function Menu() {
  const [type, setType] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  console.log(type);
  const { productItems } = useSelector((state) => state.product);
  const typeList = productItems.filter(
    (item) => item.type === type.toLowerCase()
  );

  const filterType = type.toLowerCase() === "all" ? productItems : typeList;

  const handleSetType = (type) => {
    setType(type);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = filterType.filter((item) => {
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
        <BadgeList handleSetType={handleSetType} type={type} />
        <CardList
          searchInput={searchInput}
          productItems={filterType}
          filteredResults={filteredResults}
        />
      </div>
      <CurrentOrder />
    </>
  );
}
