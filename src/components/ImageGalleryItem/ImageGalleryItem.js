import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';

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

    return (
      <div>
        <li className="gallery-item" onClick={this.openModal}>
          <img src="" alt="" />
        </li>
        <Modal isOpen={isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}
