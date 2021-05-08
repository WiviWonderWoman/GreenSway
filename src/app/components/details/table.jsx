import React from "react";
import PropTypes, { string } from "prop-types";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //variables for readability
        const name = this.props.fraction.name;
        const amount = this.props.chartData[this.props.fraction.source] / 5;
        const max = this.props.fraction.max / 5;
        const price = this.props.fraction.price;
        const unit = this.props.fraction.unit;
        const total = amount * price + ' :-';
        const className = this.props.fraction.id;

        return (
            <div className="flex.container">
                <div className="nav-list">
                    <div className={className}>
                        <h2>{name}</h2>
                        <table >
                            <thead>
                                <tr>
                                    <th>Förbrukat</th>
                                    <th>av</th>
                                    <th>max.</th>
                                    <th>pris/st.</th>
                                    <th>Totalt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{amount} {unit}</td>
                                    <td>/</td>
                                    <td>{max} {unit}</td>
                                    <td>{price} :-</td>
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
        max: PropTypes.number,
        unit: PropTypes.string,
        id: PropTypes.string,
        hatchOpen: PropTypes.bool,
        isFull: PropTypes.bool
    }),
    cosumption: string,
    chartData: PropTypes.exact({
        organic: PropTypes.number,
        newspaper: PropTypes.number,
        cardboard: PropTypes.number,
        glas: PropTypes.number,
        plastic: PropTypes.number,
        metal: PropTypes.number,
        residual: PropTypes.number,
        electricity: PropTypes.number,
        water: PropTypes.number
    })
}