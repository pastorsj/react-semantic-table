/**
 * Created by sampastoriza on 3/28/17.
 */
import React, { Component } from 'react';
import {Body, Cell, DataTable, Footer, Header, HeaderCell, Row } from '../dist/react-semantic-datatable';

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

class DataTableExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DataTable celled pagination>
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
        )
    }
}