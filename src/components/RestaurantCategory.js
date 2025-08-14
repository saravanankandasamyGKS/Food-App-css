import React from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="category-wrapper">
      <div className="category-card" onClick={handleClick}>
        <div className="category-header">
          <span className="category-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="category-arrow">⬇️</span>
        </div>

        {showItems && (
          <div className="category-items">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
