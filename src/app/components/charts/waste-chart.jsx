import React from "react";
import PropTypes from "prop-types";
import { PieChart } from 'react-minimal-pie-chart';
/** 
 * @component WasteChart is a stateless component for displaying a pie-chart of users comsumption of garbage fractions,
 *  with react-minimal-pie-chart function-components: PieChart
 */
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

        return (
            <PieChart
                animate
                animationDuration={3000}
                animationEasing='ease-in-out'
                background='lightgray'
                startAngle={270}
                radius={40}
                center={[57, 50]}
                lineWidth={30}
                lengthAngle={360}
                data={household}
                reveal={50}
                label={({ dataEntry }) => dataEntry.title + ' ' + Math.round(dataEntry.percentage) + '%'}
                labelStyle={(index) => ({
                    fill: household[index].color,
                    fontSize: 'calc(0.4px + 0.4vmin)',
                    fontFamily: 'sans-serif',
                })}
                labelPosition={112}
            />
        )
    }
}
WasteChart.propTypes = {
    chartData: PropTypes.object
}