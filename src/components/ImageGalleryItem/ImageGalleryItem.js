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
    const { webformatURL, tag, largeImageUrl } = this.props;
    return (
      <div>
        <img
          src={webformatURL}
          alt={tag}
          onClick={this.modalToggle}
          height="250px"
        />
        <Modal
          isOpen={isModalOpen}
          isClose={this.modalToggle}
          url={largeImageUrl}
          tags={tag}
        />
      </div>
    );
  }
}
