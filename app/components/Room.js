import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class Room extends Component {
  render() {
    return <li style={!this.props.unlocked ? {fontWeight: 'bold'} : null}>{this.props.name}</li>;
  }
}

export default Room;
