import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import RoomsActionCreator from '../actions/RoomsActionCreator';

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
    RoomsActionCreator.unlock('kjerstins_office__');
  }
}

export default Menu;
