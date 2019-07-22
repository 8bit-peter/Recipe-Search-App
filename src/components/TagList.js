import React from "react";

const TagList = ({ searchList, onTagDelete }) => {
  if (searchList.length === 0) {
    return null;
  }
  return (
    <div className="container">
      <h2 className="tagList">Tags List</h2>
      <ul className="tagList__tags">
        {searchList.map((value, i) => (
          <li key={i} className="tags__item">
            {value}
            <span
              onClick={e => {
                onTagDelete(e.target.dataset.tag);
              }}
              data-tag={value}
              className="tags__clear"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
