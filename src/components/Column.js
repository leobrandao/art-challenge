import React from "react";
import Item from "./Item";
import AddNew from "./AddNew";

const Column = ({ addNewItem, moveItem, items, columnName, prevColumn, nextColumn }) => (
  <div className="col-sm kanban--col">
    <h2>{columnName}</h2>
    <ul>
      {items.map((item, i) => (
        <Item
          key={i}
          moveItem={moveItem}
          item={item}
          columnName={columnName}
          prevColumn={prevColumn}
          nextColumn={nextColumn}
        />
      ))}
    </ul>
    <AddNew addNewItem={addNewItem} columnName={columnName} />
  </div>
);

export default Column;
