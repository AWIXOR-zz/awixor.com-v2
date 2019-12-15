import React from "react";

const PrjectItem = ({ imgUrl, data_category, title }) => (
  <div
    className={`img-container ${data_category}`}
    data-category={data_category}
  >
    <img src={imgUrl} alt={title} />
  </div>
);
export default PrjectItem;
