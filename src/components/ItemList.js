import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.card.info.id} className="item-row">
          <div className="item-info">
            <div className="item-name-price">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="item-description">{item.card.info.description}</p>
          </div>

          <div className="item-image-container">
            <div className="add-button-wrapper">
              <button
                className="add-button"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="item-image"
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
