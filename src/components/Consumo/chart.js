import React from 'react';

import {Sunburst} from 'react-vis';
import ShowcaseButton from './showcaseButton.js';

function randomLeaf() {
  return {
    size: Math.random() * 1000,
    color: Math.random()
  };
}

var UnitsVisualization = ['Kw/h', '€', 'CO2'];
var idUnitViz = 1;
function updateData() {
  const totalLeaves = Math.random() * 20;
  idUnitViz = Math.floor(Math.random()*3);
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = randomLeaf();
    if (Math.random() > 0.8) {
      leaf.children = [...new Array(3)].map(() => randomLeaf());
    }
    leaves.push(leaf);
  }
  return {
    title: '',
    color: 1,
    children: leaves
  };
}

const DIVERGING_COLOR_SCALE = ['#00939C', '#85C4C8', '#EC9370', '#C22E00'];

export default class AnimatedSunburst extends React.Component {
  state = {
    data: updateData(),
    hovering: false
  }

  render() {
    const {data, hovering} = this.state;
    return (
      <div className="animated-sunburst-example-wrapper">
        <ShowcaseButton
          onClick={() => this.setState({data: updateData()})}
          buttonContent={UnitsVisualization[idUnitViz]} />
        
        <Sunburst
          animation={{damping: 20, stiffness: 300}}
          data={data}
          colorType={'category'}
          colorRange={DIVERGING_COLOR_SCALE}
          style={{stroke: '#fff'}}
          onValueMouseOver={() => this.setState({hovering: true})}
          onValueMouseOut={() => this.setState({hovering: false})}
          height={300}
          width={300} />
      </div>
    );
  }

}