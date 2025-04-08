import { combineClassNames } from '../../../utils';
import type { ArticleProps } from './types';
import type { FC } from 'react';
import Typography from '../../atoms/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../atoms/Typography/constants';

const Article: FC<ArticleProps> = ({
  title,
  subtitle,
  author,
  date,
  content,
  variant = TYPOGRAPHY_VARIANTS.body1,
  className,
  imageUrl,
  imageAlt,
  tags,
}) => {
  return (
    <article className={combineClassNames('space-y-4', className)}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <div className="space-y-2">
        <Typography variant={TYPOGRAPHY_VARIANTS.h2}>{title}</Typography>
        {subtitle && (
          <Typography variant={TYPOGRAPHY_VARIANTS.h4} color="secondary">
            {subtitle}
          </Typography>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        {author && <span>By {author}</span>}
        {date && <span>• {date}</span>}
      </div>

      <Typography variant={variant}>{content}</Typography>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default Article;
