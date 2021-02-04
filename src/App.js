import logo from './logo.svg';
import './App.css';
import React from 'react';
import Slider from './Slider';
import ColorButton from './ColorButton';
import PatchPoint from './PatchPoint';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "#808080"
    };
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor = (newColor) => {
    console.log("updateColor called, new color is: " + this.color)
    this.setState({
      color: newColor
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div class="minibrute">
            <img src="images/background.png" classname="background-image" alt="background image" />
            <div class="inputs">
              {/*Knobs*/}
              <Slider x="164" y="51" name="fine-tune-knob" min="1" max="31" defaultValue="16" inputType="knob"/>
              <Slider x="249" y="51" name="glide-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="163" y="142" name="fm-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="249" y="142" name="ultrasaw-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="333" y="51" name="pulse-width-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="418" y="51" name="metalizer-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="501" y="51" name="vco-2-tune-knob" min="1" max="31" defaultValue="16" inputType="knob"/>
              <Slider x="602" y="51" name="cutoff-knob" min="1" max="31" defaultValue="31" inputType="knob"/>
              <Slider x="687" y="51" name="resonance-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="772" y="51" name="filter-mode-knob" min="1" max="4" defaultValue="1" inputType="knob"/>
              <Slider x="333" y="142" name="pwm-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="418" y="142" name="metal-mod-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="602" y="142" name="fm1-knob" min="1" max="31" defaultValue="16" inputType="knob"/>
              <Slider x="687" y="142" name="rm-knob" min="1" max="31" defaultValue="16" inputType="knob"/>
              <Slider x="772" y="142" name="att1-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="862" y="142" name="global-tune-knob" min="1" max="31" defaultValue="16" inputType="knob"/>
              <Slider x="947" y="142" name="att2-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="862" y="51" name="brute-factor-knob" min="1" max="31" defaultValue="1" inputType="knob"/>
              <Slider x="947" y="51" name="master-volume-knob" min="1" max="31" defaultValue="31" inputType="knob"/>
              <Slider x="55" y="51" name="lfo-1-wave-knob" min="1" max="6" defaultValue="2" inputType="knob"/>
              <Slider x="55" y="250" name="lfo-2-wave-knob" min="1" max="6" defaultValue="2" inputType="knob"/>
              <Slider x="17" y="141" name="lfo-1-wave-knob" min="1" max="31" defaultValue="11" inputType="knob"/>
              <Slider x="17" y="319" name="lfo-2-wave-knob" min="1" max="31" defaultValue="11" inputType="knob"/>

              {/*Sliders*/}
              <Slider x="126" y="274" name="saw-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="196" y="274" name="square-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="265" y="274" name="triangle-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="335" y="274" name="noise-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="405" y="274" name="ext-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="476" y="274" name="osc-2-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="552" y="274" name="adsr-attack-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="617" y="274" name="adsr-decay-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="685" y="274" name="adsr-sustain-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="752" y="274" name="adsr-release-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="821" y="274" name="ad-attack-slider" min="1" max="21" defaultValue="1" inputType="slider"/>
              <Slider x="888" y="274" name="ad-decay-slider" min="1" max="21" defaultValue="1" inputType="slider"/>

              {/*Binary Switches*/}
              <Slider x="974" y="246" name="ad-gate-trig-binswitch" min="1" max="2" defaultValue="2" inputType="binary-switch"/>
              <Slider x="974" y="319" name="ad-once-loop-binswitch" min="1" max="2" defaultValue="2" inputType="binary-switch"/>

              {/*Ternary Switches*/}
              <Slider x="86" y="141" name="lfo-1-sync-terswitch" min="1" max="3" defaultValue="1" inputType="ternary-switch"/>
              <Slider x="86" y="319" name="lfo-2-sync-terswitch" min="1" max="3" defaultValue="1" inputType="ternary-switch"/>
              <Slider x="486" y="141" name="vco-2-wave-terswitch" min="1" max="3" defaultValue="1" inputType="ternary-switch"/>
              <Slider x="519" y="141" name="vco-2-range-terswitch" min="1" max="3" defaultValue="3" inputType="ternary-switch"/>

              {/*Patch Points*/}
              <PatchPoint x="1022" y="31" name="VCO 1 Pitch" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="31" name="VCO 1 FM" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="31" name="VCO 1 Ultrasaw" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="31" name="VCO 1 PWM" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="31" name="VCO 1 Metal In" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="31" name="VCO 1 Metal Mod" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="31" name="VCO 2 Pitch" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="31" name="Ext In Master" globalColor={this.state.color}/>

              <PatchPoint x="1022" y="79" name="VCO 1 Sync" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="79" name="VCO 1 Lin FM" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="79" name="VCO 1 Saw Out" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="79" name="VCO 1 Square Out" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="79" name="VCO 1 Triangle Out" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="79" name="VCO 1 Noise Out" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="79" name="VCO 2 Out" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="79" name="Ext In Ext" globalColor={this.state.color}/>

              <PatchPoint x="1022" y="145" name="Filter FM" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="145" name="Filter RM" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="145" name="Filter Cutoff" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="145" name="Amp AM 1" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="145" name="Amp Amp" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="145" name="Amp Out" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="145" name="Inverter In" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="145" name="Inverter Out" globalColor={this.state.color}/>

              <PatchPoint x="1022" y="212" name="ADSR Trig" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="212" name="ADSR Out" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="212" name="AD Trig" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="212" name="AD Attack" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="212" name="AD Decay" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="212" name="AD Out" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="212" name="LFO 1 Out" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="212" name="LFO 2 Out" globalColor={this.state.color}/>

              <PatchPoint x="1022" y="277" name="VCA In 1" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="277" name="VCA In 2" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="277" name="Attenuators In 1" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="277" name="Attenuators In 2" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="277" name="Sequencer Clock" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="277" name="Sequencer Reset" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="277" name="MIDI KBD" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="277" name="MIDI Gate" globalColor={this.state.color}/>

              <PatchPoint x="1022" y="323" name="VCA CV" globalColor={this.state.color}/>
              <PatchPoint x="1056" y="323" name="VCA Out" globalColor={this.state.color}/>
              <PatchPoint x="1091" y="323" name="Attenuator Out 1" globalColor={this.state.color}/>
              <PatchPoint x="1127" y="323" name="Attenuator Out 2" globalColor={this.state.color}/>
              <PatchPoint x="1160" y="323" name="Sequencer Sync" globalColor={this.state.color}/>
              <PatchPoint x="1195" y="323" name="Sequencer Run" globalColor={this.state.color}/>
              <PatchPoint x="1230" y="323" name="MIDI Velo" globalColor={this.state.color}/>
              <PatchPoint x="1265" y="323" name="MIDI Press" globalColor={this.state.color}/>
            </div>
          </div>
          <div class="color-buttons-tray">
            <ColorButton name="Blue" backgroundColor="#4169E1" colorChanger={this.updateColor}/>
            <ColorButton name="Pine" backgroundColor="#2c821b" colorChanger={this.updateColor}/>
            <ColorButton name="Navy" backgroundColor="#000080" colorChanger={this.updateColor}/>
            <ColorButton name="Mint" backgroundColor="#42f563" colorChanger={this.updateColor}/>
            <ColorButton name="Yellow" backgroundColor="#e3e310" colorChanger={this.updateColor}/>
            <ColorButton name="Orange" backgroundColor="#f5aa42" colorChanger={this.updateColor}/>
            <ColorButton name="Violet" backgroundColor="#bd25c2" colorChanger={this.updateColor}/>
            <ColorButton name="Maroon" backgroundColor="#9c1616" colorChanger={this.updateColor}/>
            <ColorButton name="Cyan" backgroundColor="#1ee3dc" colorChanger={this.updateColor}/>
          </div>
        </header>
        <div class="patchbay">

        </div>
      </div>
    );
  }
}

export default App;