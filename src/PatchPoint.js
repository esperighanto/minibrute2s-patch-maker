import React from 'react';
import {ColorContext} from './ColorContext'

class PatchPoint extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      color: "#808080"
    }
  }

  handleClick(){
    this.setState({
      color: this.props.globalColor
    });
  }

  render(){
    // <ColorContext.Consumer>
    //   {({color}) => (
    //     <button
    //       style={{backgroundColor: color}}>
    //       Something
    //       </button>
    //   )}
    // </ColorContext.Consumer>
        const patchPointStyle={
          left: this.props.x + "px",
          top: this.props.y + "px",
          position: "absolute",
          borderRadius: "50%",
          border: "none",
          width: "3px",
          height: "3px",
          padding: "11px",
          margin: "4px 2px",
          backgroundColor: this.state.color,
          textAlign: "center",
          display: "inline-block",
          fontSize: "3px",
      }
    return(
      <button style={patchPointStyle} onClick={this.handleClick.bind(this)} />
    );
  }
}

export default PatchPoint;