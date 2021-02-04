import React from 'react';

class Slider extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const sliderStyle={
      left: this.props.x + "px",
      top: this.props.y + "px",
      position: "absolute"
    };
    return(
      <form>
        <div class={this.props.name}>
          <input
            style={sliderStyle}
            type="range"
            min={this.props.min}
            orient="vertical"
            max={this.props.max}
            defaultValue={this.props.defaultValue}
            class={this.props.inputType}
            id="myRange"
          />
        </div>
      </form>
    );
  }
}

export default Slider;