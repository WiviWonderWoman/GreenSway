import React from "react";

export default class Content extends React.Component {

    render() {
        return (
            <div className="spacer">
                {this.props.children}
            </div>
        )
    }
}