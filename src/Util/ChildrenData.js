import React from 'react';
import { filterProps } from './FilterProps';

class ChildrenData {

    formatChildrenData(props) {
        // let data = [];
        let footer;
        let body;
        let header;

        console.log('Original Props', props);

        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                console.log('Child Type', child.type.name);
                if (typeof (child) === 'undefined' || child === null) {
                    return;
                } else if (child.type.name === 'Header') {
                    console.log('Header', child);
                    if (header !== undefined) {
                        console.warn("You cannot have more than one Header");
                        return;
                    }
                    header = child;
                } else if (child.type.name === 'Footer') {
                    if (footer !== undefined) {
                        console.warn("You cannot have more than one Footer");
                        return;
                    }
                    footer = child;
                } else if (child.type.name === 'Body') {
                    console.log('Body', child);
                    if (body !== undefined) {
                        console.warn("You cannot have more than one Body");
                        return;
                    }
                    body = child;
                    // data.push({
                    //     data: this.retrieveRowDataFromBody(child.props),
                    //     props: child.props
                    // });
                } else {
                    console.warn("The only possible direct children of the Table are the Header, Footer, Body elements");
                }
            });
        }
        return {
            props: filterProps(props, 'children'),
            children: {
                header: header.props ? this.retrieveDataFromHeader(header.props) : [],
                body: body.props ? this.retrieveDataFromBody(body.props) : [],
                footer: footer ? this.retrieveDataFromFooter(footer) : []
            }
        };
    }

    retrieveDataFromHeader(props) {
        let headerCellData = [];

        if (typeof (props.children) !== undefined) {
            React.Children.forEach(props.children, child => {
                if (typeof (child) !== 'object' || child === null) {
                    return;
                } else if (child.type.name === 'HeaderCell' && typeof (child.props) !== 'undefined') {
                    headerCellData.push(child);
                }
            });
        }
        return {
            props: filterProps(props, 'children'),
            children: this.retrieveDataFromHeaderCells(headerCellData)
        };
    }

    retrieveDataFromHeaderCells(headerCellData) {
        let data = [];
        let dataProps = [];

        console.log('HeaderCellData', headerCellData);

        headerCellData.forEach(headerCell => {
            if (typeof (headerCell.props) === 'undefined') {
                console.warn('HeaderCell needs to have props');
            }
            
            if (typeof (headerCell.props.children) !== 'undefined') {
                React.Children.forEach(headerCell.props.children, child => {
                    console.log('type of header cell child', typeof child);
                    if (typeof child === 'string') {
                        data.push(child);
                    } else {
                        console.warn('No support for inner object yet, since they can be sorted');
                    }
                });
                dataProps.push(filterProps(headerCell.props, 'children'));
            } else {
                console.warn('HeaderCell has no children');
            }
        });
        return {
            props: dataProps,
            children: data
        };
    }

    retrieveDataFromBody(props) {
        let rowData = [];

        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                if (typeof (child) !== 'object' || child === null) {
                    return;
                } else if (child.type.name === 'Row' && typeof (child.props) !== 'undefined') {
                    rowData.push(child);
                }
            });
        }
        return {
            props: filterProps(props, 'children'),
            children: this.retrieveDataFromRows(rowData)
        };
    }

    retrieveDataFromFooter(footer) {
        return footer;
    }
}

export default ChildrenData;