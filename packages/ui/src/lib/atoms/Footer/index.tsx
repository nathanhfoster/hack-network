import { combineClassNames } from '../../../utils';
import type { FooterProps } from './types';
import type { FC } from 'react';
import {
  FOOTER_BASE_CLASSES,
  FOOTER_STICKY_CLASSES,
  FOOTER_CONTAINER_CLASSES,
  FOOTER_COPYRIGHT_CLASSES,
  FOOTER_LINKS_CLASSES,
  FOOTER_LINK_CLASSES,
  FOOTER_LOGO_CONTAINER_CLASSES,
  FOOTER_LOGO_TEXT_CLASSES,
  FOOTER_SOCIAL_LINK_CLASSES,
} from './constants';

const Footer: FC<FooterProps> = ({
  children,
  className,
  copyright,
  links,
  socialLinks,
  logo,
  sticky = false,
}) => {
  return (
    <footer
      className={combineClassNames(
        FOOTER_BASE_CLASSES,
        sticky && FOOTER_STICKY_CLASSES,
        className,
      )}
    >
      <div className={FOOTER_CONTAINER_CLASSES}>
        {logo && (
          <a href="#" className={FOOTER_LOGO_CONTAINER_CLASSES}>
            <img src={logo.src} className="h-8" alt={logo.alt} />
            {logo.text && (
              <span className={FOOTER_LOGO_TEXT_CLASSES}>{logo.text}</span>
            )}
          </a>
        )}
        {children}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {copyright && (
            <span className={FOOTER_COPYRIGHT_CLASSES}>
              © {new Date().getFullYear()}{' '}
              {copyright.href ? (
                <a href={copyright.href} className="hover:underline">
                  {copyright.text}
                </a>
              ) : (
                copyright.text
              )}
              . All Rights Reserved.
            </span>
          )}
          {links && links.length > 0 && (
            <ul className={FOOTER_LINKS_CLASSES}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={FOOTER_LINK_CLASSES}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex space-x-6 sm:justify-center sm:mt-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={FOOTER_SOCIAL_LINK_CLASSES}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
