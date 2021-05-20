import React from "react";
import PropTypes from "prop-types";
import { PieChart } from 'react-minimal-pie-chart';
/** 
 * @class @component
 * @classdesc stateless component for displaying a pie-chart of users comsumption of water and electricity,
 *   with react-minimal-pie-chart function-components: 
 * @PieChart
 */
export default class LaudryChart extends React.Component {

    render() {
        /**
        * An Array of data-objects that the PieChart needs to render.
        * @typedef  
        * @property {string} title
        * @property  {number} value
        * @property  {color} string
        * @description value is doubled so that only 50% shows and the fractions doesn't float together.
         */
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
    /**
     * Users consumption of electricity
     */
    electricity: PropTypes.number,
    /**
     * Users consumption of water
     */
    water: PropTypes.number
}