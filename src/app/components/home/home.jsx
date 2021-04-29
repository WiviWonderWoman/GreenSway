import React from "react";
import Caller from "../../utils/caller";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    getUser(id) {
        console.log('id: ', id)
        Caller.get(`/${id}`, {})
        .then(res => {
            const user = res.data;
            console.log('USER: ',user);
            this.setState({
                email: user.email
            })
        })
        .catch(error => console.log(error));
    }

    componentDidMount() {
        const param = window.location.hash;
        const splitted = param.split("/");
        console.log(splitted);
        this.getUser(splitted[2]);
    }

    render() {
        return(
            <div className="user">
                <h1>Innehåll under utveckling.</h1>
                <p>Tack för ditt tålamod {this.state.email}</p>
            </div>
        );
    }
}