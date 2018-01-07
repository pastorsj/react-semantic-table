import React from 'react';
import { filterProps } from './FilterProps';

class ChildrenData {

    formatChildrenData(props) {
        // let data = [];
        let footer;
        let body;
        let header;

        console.log('Main Props', props);

        if (typeof (props.children) !== 'undefined') {
            React.Children.forEach(props.children, child => {
                if (typeof (child) === 'undefined' || child === null) {
                    return;
                } else if (child.type.name === 'Header') {
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

        headerCellData.forEach(headerCell => {
            if (typeof (headerCell.props) === 'undefined') {
                console.warn('HeaderCell needs to have props');
            }
            
            if (typeof (headerCell.props.children) !== 'undefined') {
                React.Children.forEach(headerCell.props.children, child => {
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

    retrieveDataFromRows(rowData) {
        let data = [];
        let dataProps = [];

        rowData.forEach(rowCell => {
            if (typeof (rowCell.props) === 'undefined') {
                console.warn('HeaderCell needs to have props');
            }
            
            if (typeof (rowCell.props.children) !== 'undefined') {
                React.Children.forEach(rowCell.props.children, child => {
                    if (typeof (child) !== 'object' || child === null) {
                        return;
                    } else if (child.type.name === 'Cell' && typeof (child.props) !== 'undefined') {
                        data.push(child);
                    } else {
                        console.warn('No support for that particular type of object');
                    }
                });
                dataProps.push(filterProps(rowCell.props, 'children'));
            } else {
                console.warn('Row has no children');
            }
        });
        return {
            props: dataProps,
            children: this.retrieveDataFromCells(data)
        };
    }

    retrieveDataFromCells(cellData) {
        let data = [];
        let dataProps = [];

        cellData.forEach(cell => {
            if (typeof (cell.props) === 'undefined') {
                console.warn('HeaderCell needs to have props');
            }
            
            if (typeof (cell.props.children) !== 'undefined') {
                React.Children.forEach(cell.props.children, child => {
                    if (typeof child === 'string' || typeof child === 'number') {
                        data.push(child);
                    } else {
                        console.warn('No support for inner object yet, since they can be sorted');
                    }
                });
                dataProps.push(filterProps(cell.props, 'children'));
            } else {
                console.warn('Cell has no children');
            }
        });
        return {
            props: dataProps,
            children: data
        };
    }

    retrieveDataFromFooter(footer) {
        return footer;
    }
}

export default ChildrenData;