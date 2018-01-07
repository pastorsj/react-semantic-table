 // eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

import Row from './Row';
import {filterProps} from '../Util/FilterProps';

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredProps: {}
        };
        console.log('Props.children', props.children);
    }

    componentWillMount() {
        this.constructBody(this.props);
    }

    constructBody(props) {
        console.log('Body Props', props);
        const filteredProps = filterProps(props, 'children');
        console.log('Filtered Props', filteredProps);
        this.setState({
            filteredProps
        });
    }

    render() {
        return (
            <Table.Body {...this.state.filteredProps}>
                {
                    this.props && this.props.children && this.props.children.children ? this.props.children.children.map((childre, index) => {
                        return (
                            <Row>
                                
                            </Row>
                        );
                    }) : <span></span>
                }
            </Table.Body>
        );
    }
}

Body.propTypes = {
    as: PropTypes.element,
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;
