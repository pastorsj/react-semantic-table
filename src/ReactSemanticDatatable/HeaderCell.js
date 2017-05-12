import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class HeaderCell extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.HeaderCell {...this.props}>
                this.props.children
            </Table.HeaderCell>
        );
    }
}

Cell.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    sortable: PropTypes.oneOf([
        PropTypes.bool,
        PropTypes.oneOf([
            'ascending', 'descending'
        ])
    ])
}

export default HeaderCell;