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
            // ,
            // isAdmin: false
        }
    }
    // TODO: conditinal if clicked - pass the source to Table
    handleClick(source) {
        console.log('NavBars handleClick. SOURCE ' + source);

        const fractionDataService = new FractionDataService();
        const fraction = fractionDataService.getFractionBySource(source)

        console.log('NavBArs handleClick. FRACTION ' + fraction);
        this.setState({
            isClicked: true,
            fraction: fraction
            // source: source
        });
    }

    componentDidMount() {

        // if (this.props.role === 'admin') {
        //     this.setState({
        //         isAdmin: true
        //     })
        // }
    }
    render () {
        return(
            this.state.isClicked !== true ?
            <>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton onClick={(source) => this.handleClick(source)}/>
                        {/* fractions={this.props.fractions} */}
                    </ul>
                </nav>
            </>
                :
            <>
                <nav className="flex.container">
                    <ul className="nav-list">
                        {this.props.children}
                        <FractionButton onClick={(source) => this.handleClick(source)}/>
                        {/* fractions={this.props.fractions} */}
                    </ul>
                </nav>
                {/* <div className="user">
                    <h1>Välkommen {this.props.username}!</h1>
                </div> */}
                
                <div>
                    <Table fraction={this.state.fraction}/>
                </div> 
            </>
            // :
            // <>
            //     <div className="admin">
            //         <h1>Välkommen {this.props.username}!</h1>
            //     </div>
            //     <nav className="flex.container">
            //         <ul className="nav-list">
            //             {this.props.children}
            //             <FractionButton className="clicked" fractions={this.props.fractions}/>
            //         </ul>
            //     </nav>
            // </>
        );
    }
}