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

HeaderCell.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    sortable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([
            'ascending', 'descending'
        ])
    ])
}

export default HeaderCell;