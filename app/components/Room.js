import React, {Component} from 'react';

class Room extends Component {
  render() {
    return <li style={!this.props.unlocked ? {fontWeight: 'bold'} : null}>{this.props.name}</li>;
  }
}

export default Room;
