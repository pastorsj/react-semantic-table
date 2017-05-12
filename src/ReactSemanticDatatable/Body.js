import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.Body {...this.props}>
                this.props.children
            </Table.Body>
        );
    }
}

Body.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string
}

export default Body;
