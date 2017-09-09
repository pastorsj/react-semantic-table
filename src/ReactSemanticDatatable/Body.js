 // eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class Body extends Component {

    render() {
        return (
            <Table.Body>
            {this.props.children}
            </Table.Body>
        );
    }
}

Body.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Body;
