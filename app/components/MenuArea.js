import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Menu from './Menu';
import Notes from './Notes';

class MenuArea extends Component {
  render() {
    return(
      <div className='menu-area'>
        <div className='branding'>
          <div className='branding__title'>Et Hjulemysterium</div>
        </div>
        <Menu />
        <Notes crimeClues={this.props.playerData.crimeClues} />
      </div>
    );
  }
}

export default MenuArea;
