import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import Column from "./components/Column";

class App extends React.Component {
  
  state = {
    "person 1": ["Item 1", "Item 2", "Item 3"],
    "person 2": [ "Item 4", "Item 5", "Item 6" ],
    "Person 3": [ "Item 7", "Item 8", "Item 9" ],
    "Person 4": [ "Item 10", "Item 11", "Item 12" ]
  }

  addNewItem = columnName => {
    let newItem = window.prompt("Enter New Item to " + columnName);
    if (newItem === null || newItem === '') return;
    const columns = { ...this.state }
    
    columns[columnName] = [...columns[columnName], newItem];

    this.setState( columns );
  };

  moveItem = (item, columnOrig, columnDest) => {
    if ( !columnDest ) return;

    const columns = { ...this.state }

    columns[columnDest] = [...columns[columnDest], item];
    columns[columnOrig] = columns[columnOrig].filter( filteredItem => filteredItem !== item )

    this.setState( columns );
  }

  render() {
    const columns = this.state;
    const keys = Object.keys(columns);
    return (
      <div className="container">
        <h1 className="app--title">ART.com Kanban Challenge</h1>
        <div className="row">
          {keys.map((key, index) => (
            <Column
              key={key}
              addNewItem={this.addNewItem}
              moveItem={this.moveItem}
              columnName={key}
              items={columns[key]}
              prevColumn={keys[index-1]}
              nextColumn={keys[index+1]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
