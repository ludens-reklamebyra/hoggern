import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import NotesListItem from './NotesListItem';

class Notes extends Component {
  render() {
    return(
      <div className='notes'>
        <div className='notes__title'>Detektivnotater</div>
        <ol className='notes-list'>
          <NotesListItem
            discovered={this.props.crimeClues.get('where').get('discovered')}
            heading={this.props.crimeClues.get('where').get('heading')}
            discoveredText={this.props.crimeClues.get('where').get('discoveredText')}
             />
          <NotesListItem
            discovered={this.props.crimeClues.get('when').get('discovered')}
            heading={this.props.crimeClues.get('when').get('heading')}
            discoveredText={this.props.crimeClues.get('when').get('discoveredText')}
            />
          <NotesListItem
            discovered={this.props.crimeClues.get('how').get('discovered')}
            heading={this.props.crimeClues.get('how').get('heading')}
            discoveredText={this.props.crimeClues.get('how').get('discoveredText')}
             />
        </ol>
      </div>
    );
  }
}

export default Notes;
