import React from "react";

const RecipePagination = ({ searchPagination, onPageChange }) => {
  return (
    <div className="pagination">
      {searchPagination > 1 && (
        <span onClick={() => onPageChange(-1)} className="pagination__button">
          Prev
        </span>
      )}
      <span onClick={() => onPageChange(1)} className="pagination__button">
        Next
      </span>
    </div>
  );
};

export default RecipePagination;
