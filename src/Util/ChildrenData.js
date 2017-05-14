import React from 'react';
import Body from '../ReactSemanticDatatable/Body';
import Cell from '../ReactSemanticDatatable/Cell';
import Footer from '../ReactSemanticDatatable/Footer';
import Header from '../ReactSemanticDatatable/Header';
import Row from '../ReactSemanticDatatable/Row';

class ChildrenData {

    formatChildrenData(props) {
        let data = [];
        let footer;

        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                if (typeof (child) === 'undefined' || child === null) {
                    return;
                } else if (child.type === Header) {
                    return;
                } else if (child.type === Footer) {
                    if (footer !== undefined) {
                        console.warn("You cannot have more than one Footer");
                    }
                    footer = child;
                } else if (child.type === Row) {
                    data.push({
                        data: this.retrieveChildRowData(child.props),
                        props: child.props
                    });
                } else {
                    console.warn("The only possible direct children of the Table are the Header, Footer, Row elements");
                }
            });
        }
    }

    retrieveChildRowData(props) {
        let childData = props.data || {};
        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, (child) => {
                
            });
        }

    }

}

export default ChildrenData;