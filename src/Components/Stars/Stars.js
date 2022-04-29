import ReactStars from "react-rating-stars-component";
import React from "react";

const Stars = ({ rate, isEdit, searchRate, setSearchRate }) => {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating);
  };

  return (
    <ReactStars
      count={5}
      value={isEdit ? searchRate : rate}
      onChange={isEdit ? ratingChanged : null}
      edit={isEdit ? true : false}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Stars;