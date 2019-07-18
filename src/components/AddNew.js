import React from "react";
const AddNew = ({ columnName, addNewItem }) => (
  <button className="add-new-item" onClick={() => addNewItem(columnName)}>
    Add New Item
  </button>
);

export default AddNew;
