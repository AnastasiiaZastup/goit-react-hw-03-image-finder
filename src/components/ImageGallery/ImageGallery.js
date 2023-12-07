import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ImageGalleryItem key={item.id} images={item} />
      ))}
    </ul>
  );
};
