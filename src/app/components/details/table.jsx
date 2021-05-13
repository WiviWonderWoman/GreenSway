import React from "react";
import PropTypes from "prop-types";

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
            <div id={className} className="table-responsive">
                <table className="table align-middle table-dark caption-top">
                    <caption id={className}>{name}</caption>
                    <tbody>
                        <tr>
                            <td scope="col">Förbrukat</td>
                            <td scope="col" className="table-active">av</td>
                            <td scope="col" className="table-active">max.</td>
                            <td scope="col" className="table-active">pris/st.</td>
                            <td scope="col">Kostnad</td>
                        </tr>
                        <tr>
                            <td>{amount} {unit}</td>
                            <td className="table-active">/</td>
                            <td className="table-active">{max} {unit}</td>
                            <td className="table-active">{price} :-</td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
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