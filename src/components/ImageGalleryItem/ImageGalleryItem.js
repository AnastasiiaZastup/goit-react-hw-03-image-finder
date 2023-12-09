import React, { Component } from 'react';
import { CustomModal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  totalModal = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  render() {
    const { image, largeImage, tags } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <div>
        <li className='ImageGalleryItem' onClick={this.totalModal}>
          <img className="ImageGalleryItem-image" src={image} alt={tags} />
        </li>
        {modalIsOpen && (
          <CustomModal
            isOpen={modalIsOpen}
            onClose={this.totalModal}
            largeImg={largeImage}
            tags={tags}
          />
        )}
      </div>
    );
  }
}
