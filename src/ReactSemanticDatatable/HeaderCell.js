// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class HeaderCell extends Component {

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
    sortable: PropTypes.oneOf([
        PropTypes.bool,
        PropTypes.oneOf([
            'ascending', 'descending'
        ])
    ])
}

export default HeaderCell;