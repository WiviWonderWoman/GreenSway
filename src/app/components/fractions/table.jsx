import React from "react";
import PropTypes from "prop-types";
/** 
 * @component Table stateless component 
 * for displaying a table with consumption and cost per fraction.
 */
export default class Table extends React.Component {

    render() {
        //An object that computes and provides the table with data.
        const data = {
            name: this.props.fraction.name,
            amount: this.props.chartData[this.props.fraction.source] / 5,
            max: this.props.fraction.max / 5,
            price: this.props.fraction.price,
            unit: this.props.fraction.unit,
            className: this.props.fraction.fractionId
        }
        const total = data.amount * data.price + ' :-';

        return (
            <div id={data.className} className="table-responsive">
                <table className="table align-middle table-dark caption-top">
                    <caption id={data.className}>{data.name}</caption>
                    <tbody>
                        <tr>
                            <td scope="col">Förbrukat</td>
                            <td scope="col" className="table-active">av</td>
                            <td scope="col" className="table-active">max.</td>
                            <td scope="col" className="table-active">pris/st.</td>
                            <td scope="col">Kostnad</td>
                        </tr>
                        <tr>
                            <td>{data.amount} {data.unit}</td>
                            <td className="table-active">/</td>
                            <td className="table-active">{data.max} {data.unit}</td>
                            <td className="table-active">{data.price} :-</td>
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
        id: PropTypes.number,
        fractionId: PropTypes.string,
        hatchOpen: PropTypes.bool,
        isFull: PropTypes.bool,
        garbagehouse: PropTypes.string
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