import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from "prop-types";

export default class LaudryChart extends React.Component {

    render() {
        let household = [
            { title: 'Vatten', value: this.props.chartData.water * 2, color: ' turquoise' },
            { title: 'El', value: this.props.chartData.electricity * 2, color: ' rgb(235, 220, 90)' },
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

LaudryChart.propTypes = {
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