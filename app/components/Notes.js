import React, {Component} from 'react';
import NotesListItem from './NotesListItem';

class Notes extends Component {
  render() {
    return(
      <div className='notes'>
        <div className='notes__title'>Detektivnotater</div>
        <ol className='notes-list'>
          <NotesListItem
            discovered={this.props.crimeClues.where.discovered}
            heading={this.props.crimeClues.where.heading}
            discoveredText={this.props.crimeClues.where.discoveredText}
             />
          <NotesListItem
           discovered={this.props.crimeClues.when.discovered}
           heading={this.props.crimeClues.when.heading}
           discoveredText={this.props.crimeClues.when.discoveredText}
            />
          <NotesListItem
            discovered={this.props.crimeClues.how.discovered}
            heading={this.props.crimeClues.how.heading}
            discoveredText={this.props.crimeClues.how.discoveredText}
             />
        </ol>
      </div>
    );
  }
}

export default Notes;
