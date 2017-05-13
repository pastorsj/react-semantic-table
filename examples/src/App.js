import React, { Component } from 'react';
import logo from './logo.svg';
import { Body, Cell, DataTable, Header, HeaderCell, Row } from '../../dist/react-semantic-datatable';
import './App.css';


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
                    <Header>
                    {
                        data.headers.map((header, index) => {
                            return (
                                <HeaderCell sortable key={index}>
                                    {header}
                                </HeaderCell>
                            )
                        })
                    }
                    </Header>
                    <Body>
                        {
                            data.data.map((row, index) => {
                                return (
                                    <Row>
                                        {
                                            data.headers.map((header, index) => {
                                                return (
                                                    <div key={index}>
                                                        <Cell>
                                                            {row[header]}
                                                        </Cell>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Row>
                                )
                            })
                        }
                    </Body>
                </DataTable>
            </p>
      </div>
    );
  }
}

export default App;
