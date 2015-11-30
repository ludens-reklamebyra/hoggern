import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class SuspectsArea extends Component {
  render() {
    const suspects = this.props.suspects.map(suspect => {
      return(
        <div key={suspect.get('_id')} className='suspect-card'>
          <div className='suspect-card__container'>
            <div className='suspect-card__image'>
              <i className='fa fa-user-secret'></i>
            </div>
            <div className='suspect-card__name'>{suspect.get('name')}</div>
          </div>
        </div>
      );
    });

    return(
      <div className='suspects-area'>
        <h2>Mistenkte</h2>
        <div className='suspects-list'>{suspects}</div>
      </div>
    );
  }
}

export default SuspectsArea;
