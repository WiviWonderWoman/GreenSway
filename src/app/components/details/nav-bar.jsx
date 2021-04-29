import React from "react";
import FractionButton from "./fraction-button";
import Table from "./table";
import { FractionDataService } from "./fractions/fraction-data-services";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            fraction: {},
            isClicked: false
        }
    }
    handleClick(source) {
        // console.log('NavBars handleClick. SOURCE ' + source);
        const fractionDataService = new FractionDataService();
        const fraction = fractionDataService.getFractionBySource(source)
        // console.log('NavBars handleClick. FRACTION ' + fraction);
        this.setState({
            isClicked: true,
            fraction: fraction
        });
    }

    //TODO: get chart data ???
    componentDidMount() {

    }

    render () {
        return(
            this.state.isClicked !== true ?
            <>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton onClick={(source) => this.handleClick(source)}/>
                    </ul>
                </nav>
            </>
                :
            <>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton onClick={(source) => this.handleClick(source)}/>
                    </ul>
                </nav>
                <div>
                    <Table fraction={this.state.fraction}/>
                </div> 
            </>
        );
    }
}