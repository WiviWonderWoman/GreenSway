import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from "prop-types";

export default class WasteChart extends React.Component {

    render() {
        let household = [
            { title: 'Organiskt', value: this.props.chartData.organic * 2, color: ' rgba(99, 255, 9, 0.959)' },
            { title: 'Tidningar', value: this.props.chartData.newspaper * 2, color: ' rgb(122, 108, 78)' },
            { title: 'Pappförpackningar', value: this.props.chartData.cardboard * 2, color: 'rgb(51, 104, 250)' },
            { title: 'Glas', value: this.props.chartData.glas * 2, color: 'whitesmoke' },
            { title: 'Plastförpackningar', value: this.props.chartData.plastic * 2, color: 'orange' },
            { title: 'Metallförpackningar', value: this.props.chartData.metal * 2, color: ' gray' },
            { title: 'Restavfall', value: this.props.chartData.residual * 2, color: ' red' }
        ];
        console.log(this.props.chartData)
        return (
            <PieChart
                animate
                animationDuration={3000}
                animationEasing='ease-in-out'
                background='lightgray'
                startAngle={270}
                radius={25}
                center={[55, 50]}
                lineWidth={30}
                lengthAngle={360}
                data={household}
                reveal={50}
                label={({ dataEntry }) => dataEntry.title + ' ' + Math.round(dataEntry.percentage) + '%'}
                // label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                    fill: household[index].color,
                    fontSize: '3px',
                    fontFamily: 'sans-serif',
                })}
                labelPosition={112}
            />
        )
    }
}

WasteChart.propTypes = {
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