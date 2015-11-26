import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class Modal extends Component {
  componentDidMount() {
    document.addEventListener(
      'keydown',
      this._handleEscapePress.bind(this)
      , false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this._handleEscapePress.bind(this)
      , false);
  }

  render() {
    return(
      <div className='modal-wrapper'>
        <div className='modal'>
          <div className='modal__container'>
            <div className='modal__header'>
              <div className='modal__title'>{this.props.title}</div>
              <button
                onClick={this.props.handleCloseModal}
                autoFocus={true}
                className='modal__close'>
                <i className='fa fa-close'></i>
              </button>
            </div>
            {this.props.body}
          </div>
        </div>
        <div onClick={this.props.handleCloseModal} className='overlay'></div>
      </div>
    );
  }

  _handleEscapePress(e) {
    if (e.keyCode === 27 || e.keyCode === 8) {
      e.preventDefault();
      this.props.handleCloseModal();
    }
  }
}

export default Modal;
