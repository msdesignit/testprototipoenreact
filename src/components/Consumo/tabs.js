import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

import Actual from './actual.js';
import Anterior from './anterior.js';
import Futuro from './futuro.js';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;



function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
  if (e.target.value == 'a') {
    console.log(e);
  }
  if (e.target.value == 'b') {
    console.log("actual");
  }
  if (e.target.value == 'c') {
    console.log("futuro");
  } 
}
class FullWidthTabs extends React.Component {
  constructor () {
    super()
    this.state = {
      AnteriorHidden: true,
      ActualHidden: false,
      FuturoHidden: true,
    }
  }

  toggleAnteriorHidden () {
    this.setState({
      AnteriorHidden: false,
      ActualHidden:true,
      FuturoHidden:true,
    })
  }

  toggleActualHidden () {
    this.setState({
      ActualHidden: false,
      AnteriorHidden:true,
      FuturoHidden:true,
    })
  }
  toggleFuturoHidden () {
    this.setState({
      FuturoHidden: false,
      AnteriorHidden: true,
      ActualHidden:true,
    })
  }

  render() {

    return (
      <div>
        <div className="radioBut" >
        <RadioGroup onChange={onChange}  defaultValue="b"  size="small" buttonStyle="solid" >
          <RadioButton value="a" onClick={this.toggleAnteriorHidden.bind(this)} ><div className="labelTab">Anterior</div></RadioButton>
          <RadioButton value="b" onClick={this.toggleActualHidden.bind(this)}><div className="labelTab">Actual</div></RadioButton>
          <RadioButton value="c" onClick={this.toggleFuturoHidden.bind(this)}><div className="labelTab">Futuro</div></RadioButton>
        </RadioGroup>
      </div>
        <div className="card">
          {!this.state.AnteriorHidden && <Anterior/>}
          {!this.state.ActualHidden && <Actual/>}
          {!this.state.FuturoHidden && <Futuro/>}
        </div>
      </div>
    );
  }
}

export default (FullWidthTabs);
