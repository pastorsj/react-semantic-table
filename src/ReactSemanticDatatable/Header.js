// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

import HeaderCell from './HeaderCell';

import {filterProps} from '../Util/FilterProps';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredProps: {}
        };
        console.log('Props.children', props.children);
    }

    componentWillMount() {
        this.constructHeader(this.props.props);
    }

    constructHeader(props) {
        console.log('Props', props);
        const filteredProps = filterProps(props, 'children');
        console.log('Filtered Props', filteredProps);
        this.setState({
            filteredProps
        });
    }

    render() {
        return (
            <Table.Header {...this.state.filteredProps}>
               
            </Table.Header>
        );
    }
}

Header.propTypes = {
    as: PropTypes.element,
    children: PropTypes.any,
    className: PropTypes.string,
    fullWidth: PropTypes.bool
};

export default Header;
