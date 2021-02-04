import React from 'react';

class ColorButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = () => {
    {/*This is where I'll have the last clicked color be updated.*/}
    this.props.colorChanger(this.props.backgroundColor);
  }

  render(){
    const colorButtonStyle={
      borderRadius: "16px",
      border: "none",
      padding: "20px",
      margin: "4px 2px",
      color: "white",
      textAlign: "center",
      display: "inline-block",
      fontSize: "16px",
      backgroundColor: this.props.backgroundColor
    }

    return(
      <button style={colorButtonStyle} onClick={this.handleClick}> {this.props.name} </button>
    );
  }
}

export default ColorButton;