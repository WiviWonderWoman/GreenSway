import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReuseButton from "../reuse-button";

class FractionsButton extends React.Component {

    handleClick(source) {
        this.props.onClick(source);
    }

    render() {
        return (
            <>
                {this.props.allFractions.map((element) =>
                    <li key={element.fractionId} onClick={() => this.handleClick(element.source)}><ReuseButton className={element.fractionId} text={element.name} onClick={() => this.handleClick(element.source)} /></li>)}
            </>
        );
    }
}
FractionsButton.propTypes = {
    allFractions: PropTypes.array,
    onClick: PropTypes.func
}
const mapStateToProps = (state) => {
    return {
        allFractions: state.fractions,
    }
}
export default connect(mapStateToProps)(FractionsButton)