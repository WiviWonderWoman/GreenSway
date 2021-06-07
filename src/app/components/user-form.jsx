import React from "react";
import PropTypes from "prop-types";
import ReuseButton from "./reuse-button";
/** 
 * UserForm is a stateful controlled component, that displays a form and handels user input.
 * @component 
 */
export default class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //--- DEMO CASE ---
            username: 'demo@greensway.com',
        };
    }
    //handels updates to user email
    handleUsernameChange = (event) => {
        this.setState({
            //--- DEMO CASE ---
            username: username
            // event.target.value,
        });
    }
    //checks the input and sends it back to App's handleUpdate(email). 
    saveUser() {
        if (this.state.username !== "") {
            this.props.handleUpdate(this.state.username)
        }
    }
    render() {
        return (
            <div className="userForm ">
                <div className="form-group">
                {/* --- DEMO CASE --- */}
                    <label className="demo"><p id="demo">Ange ditt användarnamn (email):</p>Exempel case:<br />LÅT STÅ!</label>
                </div>
                <div className="form-group">
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div className="form-group">
                {/* --- DEMO CASE --- */}
                    {/* <label><p id="copy">Ange ditt användarnamn (email):</p><br /></label> */}
                </div>
                <div className="form-group">
                    <ReuseButton onClick={() => this.saveUser()} text='SPARA' />
                </div>
            </div>
        );
    }
}
UserForm.propTypes = {
    handleUpdate: PropTypes.func,
}
