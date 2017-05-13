// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line
import {filterProps} from '../Util/FilterProps';

class HeaderCell extends Component {

    constructor(props) {
        super(props);
        this.filteredProps = filterProps(this.props, 'sortable', 'header');
    }

    render() {
        return (
            <Table.HeaderCell {...this.filteredProps}>
                {this.props.children}
            </Table.HeaderCell>
        );
    }
}

HeaderCell.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
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
