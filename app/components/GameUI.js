import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import GameBoard from './GameBoard';

class GameUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null
    }

    this.openModal = this.openModal.bind(this);
  }

  openModal(data) {
    this.setState({
      modal: data
    });
  }

  render() {
    return <GameBoard {...this.props} handleModal={this.openModal} />;
  }
}

export default GameUI;
