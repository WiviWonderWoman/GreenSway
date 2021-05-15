import React from "react";
import PropTypes from "prop-types";

export default class FractionButton extends React.Component {

    handleClick(source) {
        this.props.onClick(source);
    }

    render() {
        return (
            <>
                {this.props.allFractions.map((element) =>
                    <li key={element.id} onClick={() => this.handleClick(element.source)}><button className={element.id}>{element.name}</button></li>)}
            </>
        );
    }
}

FractionButton.propTypes = {
    allFractions: PropTypes.array,
    onClick: PropTypes.func
}