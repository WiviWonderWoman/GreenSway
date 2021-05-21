import React from "react";
import PropTypes from "prop-types";
import { PieChart } from 'react-minimal-pie-chart';
/** 
 * @component LaudryChart is a stateless component for displaying a pie-chart of users comsumption of water and electricity,
 *   with react-minimal-pie-chart function-components: PieChart
 */
export default class LaudryChart extends React.Component {

    render() {
        let household = [
            { title: 'Vatten', value: this.props.water * 2, color: ' turquoise' },
            { title: 'El', value: this.props.electricity * 2, color: ' rgb(235, 220, 90)' },
        ];
        return (
            <PieChart
                animate
                animationDuration={3000}
                animationEasing='ease-in-out'
                background='lightgray'
                startAngle={270}
                radius={40}
                center={[50, 50]}
                lineWidth={30}
                lengthAngle={360}
                data={household}
                reveal={50}
                label={({ dataEntry }) => dataEntry.title + ' ' + Math.round(dataEntry.percentage) + '%'}
                labelStyle={(index) => ({
                    fill: household[index].color,
                    fontSize: 'calc(0.5px + 0.5vmin)',
                    fontFamily: 'sans-serif',
                })}
                labelPosition={112}
            />
        )
    }
}
LaudryChart.propTypes = {
    electricity: PropTypes.number,
    water: PropTypes.number
}