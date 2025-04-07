import { combineClassNames } from '../../../utils';
import type { GalleryProps } from './types';
import type { FC } from 'react';
import {
  GALLERY_BASE_CLASSES,
  GALLERY_IMAGE_CLASSES,
  GALLERY_TAG_BASE_CLASSES,
  GALLERY_TAG_ACTIVE_CLASSES,
  GALLERY_TAG_INACTIVE_CLASSES,
  GALLERY_TAGS_CONTAINER_CLASSES,
  GALLERY_COLUMN_CLASSES,
} from './constants';

const Gallery: FC<GalleryProps> = ({
  images,
  tags,
  columns = 3,
  className,
  imageClassName,
  containerClassName,
  onTagClick,
  ImageComponent = 'img',
}) => {
  const renderImage = (image: GalleryProps['images'][0]) => {
    return (
      <ImageComponent
        src={typeof image.src === 'string' ? image.src : image.src.src}
        alt={image.alt}
        width={image.width || 500}
        height={image.height || 500}
        loading={image.priority ? 'eager' : 'lazy'}
        className={combineClassNames(GALLERY_IMAGE_CLASSES, imageClassName)}
      />
    );
  };

  return (
    <div className={containerClassName}>
      {tags && tags.length > 0 && (
        <div className={GALLERY_TAGS_CONTAINER_CLASSES}>
          {tags.map((tag, index) => (
            <button
              key={index}
              type="button"
              className={combineClassNames(
                GALLERY_TAG_BASE_CLASSES,
                tag.isActive
                  ? GALLERY_TAG_ACTIVE_CLASSES
                  : GALLERY_TAG_INACTIVE_CLASSES,
              )}
              onClick={() => {
                tag.onClick?.();
                onTagClick?.(tag.label);
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>
      )}
      <div
        className={combineClassNames(
          GALLERY_BASE_CLASSES,
          GALLERY_COLUMN_CLASSES[columns],
          className,
        )}
      >
        {images.map((image, index) => (
          <div key={index}>{renderImage(image)}</div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
