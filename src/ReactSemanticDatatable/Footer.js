// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react'; // eslint-disable-line

class Footer extends Component {

    render() {
        return (
            <Table.Footers/>
        );
    }
}

Footer.propTypes = {
    as: PropTypes.element
};

export default Footer;
