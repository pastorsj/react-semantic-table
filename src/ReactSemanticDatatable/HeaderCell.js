// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class HeaderCell extends Component {

    render() {
        return (
            <Table.HeaderCell>
            {this.props.children}
            </Table.HeaderCell>
        );
    }
}

HeaderCell.propTypes = {
    as: PropTypes.element,
    children: PropTypes.any,
    className: PropTypes.string,
    header: PropTypes.string,
    sortable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([
            'ascending', 'descending'
        ])
    ])
};

export default HeaderCell;
