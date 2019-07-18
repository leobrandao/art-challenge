import React from "react";
import Item from "./Item";
import AddNew from "./AddNew";


const Column = ({ addNewItem, moveItem, items, columnName, prevColumn, nextColumn }) => {
    const move = (item, orig, dest) => () => moveItem(item,orig,dest);
 return (

  <div className="col-sm kanban--col">
    <h2>{columnName}</h2>
    <ul>
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          onPrevious={move(item,columnName,prevColumn)}
          onNext={move(item,columnName,nextColumn)}
          showLeftArrow={!!prevColumn}
          showRightArrow={!!nextColumn}
        />
      ))}
    </ul>
    <AddNew addNewItem={addNewItem} columnName={columnName} />
  </div>
 )
}

export default Column;
