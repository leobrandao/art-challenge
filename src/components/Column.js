import React from "react";
import Item from "./Item";
import AddNew from "./AddNew";

const Column = ({ items, columnName, moveItem, addNewItem }) => (
  <div className="col-sm kanban--col">
    <h2>{columnName}</h2>
    <ul>
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          moveItem={moveItem}
          columnName={columnName}
        />
      ))}
    </ul>
    <AddNew addNewItem={addNewItem} columnName={columnName} />
  </div>
);

export default Column;
