import React from "react";

const PrjectItem = ({ imgUrl, data_category, title, projectLink }) => (
  <div
    className={`img-container ${data_category}`}
    data-category={data_category}
  >
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <img src={imgUrl} alt={title} />
    </a>
  </div>
);
export default PrjectItem;
