import React from "react";

const ProjectItem = () => (
  <div className="button-group">
    <ul>
      <li>
        <button className="is-checked" data-filter="*">
          All
        </button>
      </li>
      <li>
        <button className="button" data-filter=".logo">
          Logos
        </button>
      </li>
      <li>
        <button className="button" data-filter=".landing-page">
          Landing Pages
        </button>
      </li>
      <li>
        <button className="button" data-filter=".other">
          Other Things
        </button>
      </li>
    </ul>
  </div>
);
export default ProjectItem;
