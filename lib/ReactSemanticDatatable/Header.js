import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.Header {...this.props}>
                this.props.children
            </Table.Header>
        );
    }
}

Cell.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool
}

export default Header;