import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      
      <div className="Smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='friend-card'>
                <div className='friend-info'>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </div>
              </div>
            );
          })}
        </ul>
    
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
