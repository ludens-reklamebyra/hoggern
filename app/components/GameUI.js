import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import GameBoard from './GameBoard';
import Modal from './Modal';

class GameUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null
    }

    this.openModal = this.openModal.bind(this);
    this.populateModal = this.populateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      // Bootstrap welcome screen
      this.openModal(() => {
        const body =
          <div style={{marginTop: '1rem', textAlign: 'center'}}>
            <button
              onClick={this.closeModal}
              autoFocus={true}
              className='modal-button'>
              Start game
            </button>
          </div>;
        this.populateModal('Welcome to this', body);
      });
    }
  }

  openModal(cb) {
    const modal = {
      loading: true
    }

    this.setState({
      modal: modal
    }, () => {
      if (typeof cb === 'function') cb();
    });
  }

  populateModal(title, body) {
    const modal = {
      loading: false,
      title: title,
      body: body
    }

    this.setState({
      modal: modal
    });
  }

  closeModal() {
    this.setState({
      modal: null
    });
  }

  render() {
    return(
      <div className='game-wrapper'>
        <GameBoard
          {...this.props}
          handleOpenModal={this.openModal}
          handlePopulateModal={this.populateModal} />
        {this.state.modal ?
          <Modal
            title={this.state.modal.title}
            body={this.state.modal.body}
            handleCloseModal={this.closeModal} />
          : null}
      </div>
    );
  }
}

export default GameUI;
