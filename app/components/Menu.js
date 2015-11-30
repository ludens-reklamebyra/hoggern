import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PlayerAction from '../actions/PlayerActionCreator';

class Menu extends Component {
  render() {
    return(
      <ul className='menu'>
        <li>
          <button onClick={this._handleClueClick} className='button button--icon'>
            Hvordan spiller jeg?
            <i className='button__icon fa fa-fw fa-question-circle'></i>
          </button>
        </li>
      </ul>
    );
  }

  _handleClueClick() {
    PlayerAction.addDetectiveNote('bolalrd');
  }
}

export default Menu;
