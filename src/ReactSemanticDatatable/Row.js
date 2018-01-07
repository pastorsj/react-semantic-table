// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class Row extends Component {

    render() {
        return (
            <Table.Row>
            {this.props.children}
            </Table.Row>
        );
    }
}

Row.propTypes = {
    active: PropTypes.bool,
    as: PropTypes.element,
    cellAs: PropTypes.any,
    cells: PropTypes.array,
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    negative: PropTypes.bool,
    positive: PropTypes.bool,
    textAlign: PropTypes.any, // Should be enum, not sure how to represent that
    verticalAlign: PropTypes.any,
    warning: PropTypes.bool
};

export default Row;
