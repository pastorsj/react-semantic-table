import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class Row extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.Row {...this.props}>
                this.props.children
            </Table.Row>
        );
    }
}

Row.propTypes = {
    active: PropTypes.bool,
    as: PropTypes.element,
    cellAs: PropTypes.any,
    cells: PropTypes.array,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    negative: PropTypes.bool,
    positive: PropTypes.bool,
    textAlign: PropTypes.any, //Should be enum, not sure how to represent that
    verticalAlign: PropTypes.any,
    warning: PropTypes.bool
}

export default Row;