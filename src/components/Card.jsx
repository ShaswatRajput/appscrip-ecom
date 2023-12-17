import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./Card.css";

const Card = (props) => {
  const [favourite, setFavourite] = useState(false);

  const toggle = () => {
    setFavourite(!favourite);
  };

  return (
    <div>
      <div className="card">
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p>{props.product.title.slice(0, 30) + "..."}</p>
          {favourite ? (
            <FaHeart onClick={toggle} />
          ) : (
            <FaRegHeart onClick={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
