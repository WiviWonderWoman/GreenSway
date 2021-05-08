import React from "react";
import PropTypes from "prop-types";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //variables for readability
        const name = this.props.fraction.name;
        const amount = this.props.chartData[this.props.fraction.source];
        const price = this.props.fraction.price;
        const total = amount * price;
        const className = this.props.fraction.id;

        return (
            <div className="flex.container">
                <div className="nav-list">
                    <div className={className}>
                        <h2>{name}</h2>
                        <table >
                            <thead>
                                <tr>
                                    <th>Antal</th>
                                    <th>Pris</th>
                                    <th>Totalt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{amount}</td>
                                    <td>{price}</td>
                                    <td>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

Table.propTypes = {
    fraction: PropTypes.exact({
        name: PropTypes.string,
        source: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
        hatchOpen: PropTypes.bool,
        isFull: PropTypes.bool
    })
}