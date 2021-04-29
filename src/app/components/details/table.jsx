import React from "react";
import Caller from "../../domain/users/caller";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            metal: 0,
            organic: 0,
            plastic: 0,
            residual: 0,
            cardboard: 0,
            newspaper: 0,
            glas: 0
        }
    }
    componentDidMount() {
        
        const param = window.location.hash;
        const splitted = param.split("/");
        // console.log(splitted);
        this.getUser(splitted[2])
    }

    getUser(id) {
        console.log('id: ', id)
        Caller.get(`/${id}`, {})
        .then(res => {
            const user = res.data;
            console.log('USER: ',user);
            this.setState({
                organic: user.organic,
                newspaper: user.newspaper,
                cardboard: user.cardboard,
                glas: user.glas,
                plastic: user.plastic,
                metal: user.metal,
                residual: user.residual,
            })
        })
        .catch(error => console.log(error));
    }

    render() {
        // console.log('Table source: ', this.props.fraction)
        const name = this.props.fraction.name;
        const amount = this.state[this.props.fraction.source];
        const price = this.props.fraction.price;
        const total = amount * price;

        return(
            <div> 
            <h1>{name}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Antal</th>
                            <th>Pris</th>
                            <th>Totalt</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td>{amount}</td>
                           <td>{price}</td>
                           <td>{total}</td>
                       </tr>
                   </tbody>
               </table>
            </div>
        );
    }
}