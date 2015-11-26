import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class NotesListItem extends Component {
  render() {
    return(
      <li className='notes-list__item'>
        <div className='notes-list__heading'>
          {this.props.heading}
        </div>
        <div className='notes-list__body'>
          {this.props.discovered ?
            this.props.discoveredText :
            <div className='notes-list__undiscovered'>Vet ikke enda...</div>
          }
        </div>
      </li>
    );
  }
}

export default NotesListItem;
