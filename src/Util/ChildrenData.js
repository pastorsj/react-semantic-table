import React from 'react';

class ChildrenData {

    formatChildrenData(props) {
        let data = [];
        let footer;
        let body;

        console.log('Original Props', props);

        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                console.log('Child Type', child.type.name);
                if (typeof (child) === 'undefined' || child === null) {
                    return;
                } else if (child.type.name === 'Header') {
                    return;
                } else if (child.type.name === 'Footer') {
                    if (footer !== undefined) {
                        console.warn("You cannot have more than one Footer");
                    }
                    footer = child;
                } else if (child.type.name === 'Body') {
                    console.log('Child', child);
                    if (body !== undefined) {
                        console.warn("You cannot have more than one Body");
                    }
                    body = child;
                    data.push({
                        data: this.retrieveRowDataFromBody(child.props),
                        props: child.props
                    });
                } else {
                    console.warn("The only possible direct children of the Table are the Header, Footer, Row elements");
                }
            });
        }
        return {
            data,
            footer
        };
    }

    retrieveRowDataFromBody(props) {
        console.log('Body props', props);
        let bodyData = {};
        if (typeof (props.children) !== undefined) {
            React.Children.forEach(props.children, child => {
                if (typeof (child) !== 'object' || child === null) {
                    return;
                } else if (child.type.name === 'Row' && typeof (child.props) !== 'undefined') {
                    
                }
            });
        }
    }

    retrieveChildRowData(props) {
        let childData = props.data || {};
        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                if (typeof (child) !== 'object' || child === null) {
                    return;
                } else if (typeof (child.props.column) !== 'undefined') {
                    let value;
                    if (typeof (child.props.data) !== 'undefined') {
                        value = child.props.data;
                    } else if (typeof (child.props.children) !== 'undefined') {
                        value = child.props.children;
                    } else {
                        console.warn('Cell has no data or children');
                        return;
                    }
                    childData[child.props.column] = {
                        value: value,
                        props: child.props
                    };
                } else {
                    console.warn('Cell is specified without a column');
                }
            });
        }
        return childData;
    }

}

export default ChildrenData;