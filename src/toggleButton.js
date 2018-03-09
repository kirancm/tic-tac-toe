import React from 'react';

class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isButtonOn : false,
        }
    }

handlerButtonClick = () => {
    this.props.onClick(!this.state.isButtonOn);
    this.setState({
        isButtonOn : !this.state.isButtonOn,
    })
    
}

    render() {
        return (
            <button onClick={this.handlerButtonClick}>{this.state.isButtonOn ? "ON" : "OFF" }</button>
        )
    }
}

export default ToggleButton;