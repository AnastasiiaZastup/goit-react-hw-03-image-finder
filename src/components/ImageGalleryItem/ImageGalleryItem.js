import React, { Component } from 'react';
import {CustomModal} from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    const { image, largeImage, tags } = this.props;
    const { modalIsOpen } = this.state;
    

    return (
      <div>
        <li className='ImageGalleryItem' onClick={this.openModal}>
          <img className = "ImageGalleryItem-image" src={image} alt= {tags} />
        </li>
        {modalIsOpen && (
          <CustomModal isOpen={modalIsOpen} onClose={this.closeModal} largeImg = {largeImage} tags = {tags} />
        )}
      </div>
    );
  }
}
