import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => (
        <ImageGalleryItem key={item.id} images={item} />
      ))}
    </ul>
  );
};
