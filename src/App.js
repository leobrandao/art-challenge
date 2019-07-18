import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import Column from "./components/Column";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Person 1",
          items: ["Item 1", "Item 2", "Item 3"]
        },
        {
          name: "Person 2",
          items: ["Item 4", "Item 5", "Item 6"]
        },
        {
          name: "Person 3",
          items: ["Item 7", "Item 8", "Item 9"]
        },
        {
          name: "Person 4",
          items: ["Item 10", "Item 11", "Item 12"]
        }
      ]
    };

    
  }


  addNewItem = columnName => {
    let newItem = window.prompt("Enter New Item to " + columnName);
    console.log(newItem);
    if (newItem === null || newItem === '') return;
    const columns = this.state.columns.map(column => {
      if (column.name === columnName) {
        column.items.push(newItem);
      }
      return column;
    });
    this.setState({
      columns
    });
  };

  moveItem = (item, columnName, direction) => {
    
    const columnIndex = this.state.columns.findIndex( (column) => column.name === columnName )
    const newColumnIndex = columnIndex + direction;
    const columns = [...this.state.columns];

    if ( newColumnIndex < 0 || newColumnIndex > columns.length - 1 ) return;

    const sourceColumn = columns[columnIndex];

    sourceColumn.items = sourceColumn.items.filter( filteredItem => filteredItem !== item );

    columns[columnIndex] = sourceColumn;
    columns[newColumnIndex].items.push(item);

    this.setState({
      columns
    });
  }

  render() {
    const columns = this.state.columns;
    return (
      <div className="container">
        <h1 className="app--title">ART.com Kanban Challenge</h1>
        <div className="row">
          {columns.map((column, i) => (
            <Column
              key={i}
              addNewItem={this.addNewItem}
              moveItem={this.moveItem}
              columnName={column.name}
              items={column.items}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
