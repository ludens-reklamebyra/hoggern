import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return(
      <ul className='menu'>
        <li><button className='button button--icon'>Hvordan spiller jeg? <i className='button__icon fa fa-fw fa-question-circle'></i></button></li>
      </ul>
    );
  }
}

export default Menu;
