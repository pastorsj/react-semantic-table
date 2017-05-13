import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataTable} from 'react-semantic-datatable';

const data = {
    "headers": [
        "Name",
        "Age",
        "Height"
    ],
    "data": [
        {
            "Name": "John",
            "Age": 10,
            "Height": 120
        },
        {
            "Name": "James",
            "Age": 20,
            "Height": 110
        }
    ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                <DataTable>
                </DataTable>
            </p>
      </div>
    );
  }
}

export default App;
