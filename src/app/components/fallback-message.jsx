import React from "react";

export default class FallBackMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hide: false
        }
    }
    handleClick() {
        console.log('FM: click');
        this.setState({
            hide: true
        })
        this.props.handleClick();
    }

    render() {
        let modalDisplay;
        if (this.state.hide) {
            modalDisplay = 'modal-hidden'
        } else {
            modalDisplay = 'modal'
        }

        return (
            <div className={modalDisplay}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>HOPPSAN!</h2>
                    </div>
                    <div className="modal-body">
                        <p>Något gick fel</p>
                    </div>
                    <div className="modal-footer">
                        <button className="close" onClick={() => this.handleClick()}><h3>Försök igen</h3></button>
                    </div>
                </div>
            </div>
        )
    }
}