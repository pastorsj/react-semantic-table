import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.Footer  {...this.props} />
        );
    }
}

Cell.propTypes = {
    as: PropTypes.element
}

export default Footer;