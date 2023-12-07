import React, { Component } from 'react';
import Modal from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { item } = this.props;

    return (
      <div>
        <li onClick={this.openModal}>
          <img src={item.webformatURL} alt="img" />
        </li>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={this.closeModal} item={item} />
        )}
      </div>
    );
  }
}
