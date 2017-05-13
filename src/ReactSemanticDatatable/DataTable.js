import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class DataTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table {...this.props.filter((prop) => {
                console.log('prop')
                return true;
            })}>
                this.props.children
            </Table>
        );
    }
}

/*
    https://react.semantic-ui.com/collections/table#table-example-pagination
*/
DataTable.propTypes = {
    as: PropTypes.element,
    attached: PropTypes.oneOf([
        PropTypes.bool,
        PropTypes.any // TODO
    ]),
    basic: PropTypes.oneOf([
        PropTypes.bool,
        PropTypes.any
    ]),
    celled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    collapsing: PropTypes.collapsing,
    color: PropTypes.oneOf([
        'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
    ]),
    columns: PropTypes.oneOf([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'
    ]),
    compact: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.any
    ]),
    definition: PropTypes.bool,
    fixed: PropTypes.bool,
    footerRow: PropTypes.any,
    headerRow: PropTypes.any,
    inverted: PropTypes.bool,
    padded: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.any
    ]),
    pagination: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    renderBodyRow: PropTypes.any,
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    size: PropTypes.oneOf([
        'mini', 'tiny', 'medium', 'big', 'huge', 'massive'
    ]),
    sortable: PropTypes.bool,
    stackable: PropTypes.bool,
    striped: PropTypes.bool,
    structured: PropTypes.bool,
    tableData: PropTypes.any,
    textAlign: PropTypes.any,
    unstackable: PropTypes.bool,
    verticalAlign: PropTypes.any
}

export default DataTable;