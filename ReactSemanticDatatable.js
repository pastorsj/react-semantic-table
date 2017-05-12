/**
 * A simple datatable implementation
 * @author Sam Pastoriza
 */
import React, {Component, PropTypes} from 'react';
import {Table, Input, Menu, Icon, Label, Dropdown} from 'semantic-ui-react';

const ASCENDING_ORDER = 'ascending';
const DESCENDING_ORDER = 'descending';

const PAGINATION_OPTIONS = [
    {
        text: '5',
        value: 5
    },
    {
        text: '10',
        value: 10
    },
    {
        text: '15',
        value: 15
    },
    {
        text: '25',
        value: 25
    },
    {
        text: '50',
        value: 50
    }
];

const propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array.isRequired,
    searchOn: PropTypes.array,
    sortOn: PropTypes.array,
    pagination: PropTypes.bool
};

/**
 * @typedef {Array} Headers
 * @property {string} header - A header for the table
 */

/**
 * @typedef {Array} Row
 * @property {string.<Array>} row - An singular row in a table
 */

/**
 * @typedef {Array} TableData
 * @property {Row.<Array>} data - An array of rows in the table
 */

/**
 * A simple implementation of a natural sort
 * Credit to @georg
 * http://stackoverflow.com/questions/15478954/sort-array-elements-string-with-numbers-natural-sort
 */
function naturalCompare(a, b) {
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
        ax.push([$1 || Infinity, $2 || ""])
    });
    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
        bx.push([$1 || Infinity, $2 || ""])
    });

    while (ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if (nn) return nn;
    }

    return ax.length - bx.length;
}

class ReactSemanticDatatable extends Component {

    /**
     * A simple customized datatable using semanic ui for react
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        /**
         * @type {object}
         * @property {string} activeItem - The selected item from the nav bar
         * @property {Headers} headers - An array of headers
         * @property {TableData} data - An array of rows of data, order matters
         * @property {string.<Array>} searchOn - A list of headers to search on
         * @property {string.<Array>} sortOn - A list of headers that can be sorted on
         * @property {boolean} pagination - If true, the table will default to 5 rows per page, but that can be customized
         * @property {string.<Array>} sortProps - An augmented array of columns to be sorted on
         * @property {number} currentPage - The current page shown on the table if pagination is enabled
         * @property {number} numberPerPage - The number of rows shown per page
         * @property {number} totalPages - The total number of pages calculated given the number of rows of data
         */
        this.state = {
            headers: props.headers || [],
            data: props.data || [],
            filteredData: props.data || [],
            searchOn: props.searchOn || [],
            sortOn: props.sortOn || '',
            sortProps: '',
            pagination: props.pagination || false,
            currentPage: 1,
            numberPerPage: 5,
            totalPages: 0
        }


        this.search = this.search.bind(this);
        this.sortColumn = this.sortColumn.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.setNumberOnPage = this.setNumberOnPage.bind(this);
    }

    /**
     * When the props object is updated in the parent state, this is called
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            filteredData: nextProps.data,
            searchOn: nextProps.searchOn,
            sortOn: nextProps.sortOn,
            pagination: nextProps.pagination || false,
            headers: nextProps.headers
        }, () => {
            this.loadContent();
        });
    }

    /**
     * When content is loaded into the datatable, it will be modified slightly to work better with the
     * implemented table below.
     */
    loadContent() {
        let sortProps = this.state.sortOn && this.state.sortOn.map((header) => {
                return {
                    name: header,
                    sorted: false,
                    sortOrder: 'ascending'
                }
            });
        let searchOn = this.state.headers.map((header) => {
            return this.state.searchOn.indexOf(header);
        });
        searchOn = searchOn.filter((i) => {
            return i !== -1;
        });
        this.setState({
            sortProps,
            totalPages: Math.ceil(this.state.filteredData.length / this.state.numberPerPage),
            searchOn
        });
    }

    /**
     * Sorts the column of data given a column number
     * @param {number} columnIndex  - The index of the column being sorted
     */
    sortColumn(columnIndex) {
        let sortedData = this.state.filteredData;
        const sortProps = this.state.sortProps;
        if (sortProps[columnIndex].sortOrder === ASCENDING_ORDER) {
            sortedData.sort((a, b) => {
                return naturalCompare(a[columnIndex], b[columnIndex]);
            });
            sortProps[columnIndex].sortOrder = DESCENDING_ORDER;
            sortProps[columnIndex].sorted = true;
            this.setState({
                sortProps,
                filteredData: sortedData,
            });
        } else if (sortProps[columnIndex].sortOrder === DESCENDING_ORDER) {
            sortedData.sort((a, b) => {
                return naturalCompare(b[columnIndex], a[columnIndex]);
            });
            sortProps[columnIndex].sortOrder = ASCENDING_ORDER;
            sortProps[columnIndex].sorted = true;
            this.setState({
                sortProps,
                filteredData: sortedData
            });
        } else {
            console.error('Sort order ' + sortProps[columnIndex].sortOrder + ' does not exist');
        }
    }

    /**
     * Searches the data based on user input
     * @param {SyntheticEvent} event
     * @param {string} search - The user input
     */
    search(event, search) {
        const input = search.value;
        const searchData = this.state.data.filter((row) => {
            return this.state.searchOn.some((e, i) => {
                    return row[i].startsWith(input);
                }) || false;
        });
        this.setState({
            filteredData: searchData
        });
    }

    /**
     * Goes to the next page in the table
     */
    nextPage() {
        if (this.state.currentPage < this.state.totalPages) {
            this.goToPage(this.state.currentPage + 1);
        }
    }

    /**
     * Goes to the previous page in the table
     */
    previousPage() {
        if (this.state.currentPage > 1) {
            this.goToPage(this.state.currentPage - 1);
        }
    }

    /**
     * Goes to the given page number in the datatable.
     * @param {number} pageNumber - The given page number
     */
    goToPage(pageNumber) {
        this.setState({
            currentPage: pageNumber
        });
    }

    /**
     * Generates the pagination options at the bottom of the table
     */
    generatePages() {
        let pages = [];
        for (let i = 1; i <= this.state.totalPages; i++) {
            pages.push((
                <Menu.Item key={i} onClick={this.goToPage.bind(this, i)}> {i} </Menu.Item>
            ));
        }
        return pages
    }

    /**
     * Sets the number selected by the user as the current value of the dropdown
     * @param {SyntheticEvent} event
     * @param {number} number - The number selected by the user from the dropdown
     */
    setNumberOnPage(event, number) {
        this.setState({
            numberPerPage: parseInt(number.value, 10)
        })
    }

    /**
     * Renders the custom datatable component
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <div>
                {
                    this.state.searchOn.length !== 0 ? (
                        <div>
                            <Label> Search </Label>
                            <Input icon='search' placeholder='Search...' onChange={this.search} fluid/>
                        </div>
                    ) : (<div/>)
                }
                <Table celled stackable sortable>
                    <Table.Header>
                        <Table.Row>
                            {
                                this.state.sortProps && this.state.headers && this.state.headers.map((header, index) => {
                                    const sortProps = this.state.sortProps[index];
                                    if (this.state.sortOn.indexOf(header) === -1) {
                                        return (
                                            <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                                        )
                                    } else {
                                        return (
                                            <Table.HeaderCell key={index} onClick={this.sortColumn.bind(this, index)}
                                                              sorted={sortProps.sorted ? sortProps.sortOrder : ''}>{header}</Table.HeaderCell>
                                        )
                                    }

                                })
                            }
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.state.filteredData && this.state.filteredData.map((row, index) => {
                                if (!this.state.pagination) {
                                    return (
                                        <Table.Row key={index}>
                                            {
                                                row && row.map((cell, index2) => {
                                                    return (
                                                        <Table.Cell key={index2}> {cell} </Table.Cell>
                                                    )
                                                })
                                            }
                                        </Table.Row>
                                    )
                                }
                                const firstIndex = (this.state.currentPage - 1) * this.state.numberPerPage;
                                const secondIndex = this.state.currentPage * this.state.numberPerPage;
                                if (index + 1 > firstIndex && index + 1 <= secondIndex) {
                                    return (
                                        <Table.Row key={index}>
                                            {
                                                row && row.map((cell, index2) => {
                                                    return (
                                                        <Table.Cell key={index2}> {cell} </Table.Cell>
                                                    )
                                                })
                                            }
                                        </Table.Row>
                                    )
                                } else {
                                    return '';
                                }
                            })
                        }
                    </Table.Body>
                    {
                        this.state.pagination ? (
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan={this.state.headers.length}>
                                        <Dropdown placeholder={this.state.numberPerPage.toString()} compact selection
                                                  options={PAGINATION_OPTIONS} onChange={this.setNumberOnPage}/>
                                        <Menu floated='right' pagination>
                                            <Menu.Item icon onClick={this.previousPage}>
                                                <Icon name='left chevron'/>
                                            </Menu.Item>
                                            {
                                                this.generatePages()
                                            }
                                            <Menu.Item icon onClick={this.nextPage}>
                                                <Icon name='right chevron'/>
                                            </Menu.Item>
                                        </Menu>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        ) : (<Table.Footer/>)
                    }
                </Table>
            </div>
        )
    }
}

ReactSemanticDatatable.propTypes = propTypes;
export default ReactSemanticDatatable;
