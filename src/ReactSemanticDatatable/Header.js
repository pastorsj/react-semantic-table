// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class Header extends Component {

    render() {
        return (
            <Table.Header {...this.props}>
                this.props.children
            </Table.Header>
        );
    }
}

Header.propTypes = {
    as: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool
}

export default Header;