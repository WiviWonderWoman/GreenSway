import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

export default class Overview extends React.Component {
    render() {
        console.log('Overview data: ',this.props.data.organic);
        let household =  [ 
            {title: 'Organiskt', value: this.props.data.organic * 2, color: ' #4CAF50'},
            {title: 'Tidningar', value: this.props.data.newspaper * 2, color: ' rgb(122, 108, 78)'},
            {title: 'Pappförpackningar', value: this.props.data.cardboard * 2, color: 'navy'},
            {title: 'Glas', value: this.props.data.glas * 2, color: 'gray'},
            {title: 'Plastförpackningar', value: this.props.data.plastic * 2, color: 'orangered'},
            {title: 'Metallförpackningar', value: this.props.data.metal * 2, color: ' rgb(56, 55, 55)'},
            {title: 'Restavfall', value: this.props.data.residual * 2, color: ' red'}
            ];
        return(
            <div className="pie-chart"> 
                {/* <h1>PIE-CHART HERE</h1> */}
                <PieChart 
                    animate
                    animationDuration={3000}
                    animationEasing='ease-in-out'
                    background='lightgray' 
                    startAngle={270} 
                    radius={40} 
                    viewBoxSize= {[200,100]}
                    center= {[100,50]} 
                    lineWidth={30} 
                    lengthAngle={360}
                    data={household}
                    reveal={50}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                        fill: household[index].color,
                        fontSize: '3px',
                        fontFamily: 'sans-serif',
                    })}
                    labelPosition={112}   
                />
            </div>
        )
    }
}