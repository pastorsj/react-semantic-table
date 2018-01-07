import React, { Component } from 'react';
import { Body, Cell, DataTable, Header, HeaderCell, Row } from '../../src/SemanticDatatable';

const data = {
    headers: [
        "Name",
        "Age",
        "Height"
    ],
    data: [
        {
            Name: "John",
            Age: 10,
            Height: 120
        },
        {
            Name: "James",
            Age: 20,
            Height: 110
        }
    ]
};

class App extends Component {
    render() {
        return (
            <div>
                <div>Below should be the table</div>
                <DataTable pagination color="red">
                    <Header className="propclass">
                    {
                        data.headers.map((header, index) => {
                            return (
                                <HeaderCell sortable header={header} key={index}>
                                    {header}
                                </HeaderCell>
                            )
                        })
                    }
                    </Header>
                    <Body className="propClass">
                        {
                            data.data.map((row, index) => {
                                return (
                                    <Row key={index}>
                                        {
                                            data.headers.map((header, index2) => {
                                                return (
                                                    <Cell column={header} key={index2}>
                                                        {row[header]}
                                                    </Cell>
                                                )
                                            })
                                        }
                                    </Row>
                                )
                            })
                        }
                    </Body>
                </DataTable>
            </div>
        );
    }
}

export default App;
