 // eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react';  // eslint-disable-line

class Cell extends Component {

    render() {
        return (
            <Table.Cell {...this.props}>
                {this.props.children}
            </Table.Cell>
        );
    }
}

Cell.propTypes = {
    active: PropTypes.bool,
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    content: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    icon: PropTypes.element,
    negative: PropTypes.bool,
    positive: PropTypes.bool,
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    textAlign: PropTypes.any, // Should be enum, not sure how to represent that
    verticalAlign: PropTypes.any,
    warning: PropTypes.bool,
    width: PropTypes.any
};

export default Cell;
