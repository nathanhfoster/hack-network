'use client';

import { combineClassNames } from '../../../utils';
import type { VideoProps } from './types';
import { VIDEO_BASE_CLASSES } from './constants';

const Video: React.FC<VideoProps> = ({
  sources,
  controls = true,
  autoplay = false,
  muted = false,
  loop = false,
  width,
  height,
  className,
  fallback = 'Your browser does not support the video tag.',
}) => {
  return (
    <video
      className={combineClassNames(VIDEO_BASE_CLASSES, className)}
      controls={controls}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      width={width}
      height={height}
    >
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      {fallback}
    </video>
  );
};

export default Video;
