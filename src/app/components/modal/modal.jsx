import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
/** 
 * @component Modal is a stateless reusable react class-component, that can easily be modified through custom styling. 
 * To hide the Modal when button is clicked the suffix '-hidden' is added to state.className. 
 * This way you can use the Modal without any other functionality passed in through the prop onClick.
 * If you prefer to use the Modal statless you kan use the additional prop 'className', 
 * and still get the visable/invisable behavior by adding the suffix '-hidden' when passed in.
 * @example default styling: ./modal.css
*/
export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: 'modal'
        };
    }
    handleClick() {
        this.setState({
            className: 'modal-hidden'
        });
        if (this.props.onClick !== undefined) {
            this.props.onClick();
        }
    }
    render() {

        /**
         * for styling individual parts of the modal
         */
        const style = {
            content: this.state.className + '-content',
            header: this.state.className + '-header',
            body: this.state.className + '-body',
            footer: this.state.className + '-footer',
            button: this.state.className + '-button'
        };

        return (
            <div className={this.state.className} >
                <div className={style.content}>
                    <div className={style.header}>
                        <h2>{this.props.header}</h2>
                    </div>
                    <div className={style.body}>
                        <p>{this.props.body}</p>
                        {this.props.children}
                    </div>
                    <div className={style.footer}>
                        <h3>{this.props.footer}</h3>
                        <button className={style.button} onClick={() => this.handleClick()} >{this.props.button}</button>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    /**
     * Text to be displayed in the modal body's p tag
     */
    body: PropTypes.string,
    /**
     * Text to be displayed in the modal button
     */
    button: PropTypes.string,
    /**
     * Allows children to be displayed in the modal body's 
     */
    children: PropTypes.any,
    /**
     * Use to style if component is used stateless
     */
    className: PropTypes.string,
    /**
     * Text to be displayed in the modal footer's h3 tag
     */
    footer: PropTypes.string,
    /**
     * Text to be displayed in the modal header's h2 tag
     */
    header: PropTypes.string,
    /**
     * Allows the parent component to handel click on modal's button
     */
    onClick: PropTypes.func
}