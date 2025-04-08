'use client';

import { FC, useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import { combineClassNames } from '../../../utils';
import type { NavbarProps } from './types';
import {
  NAVBAR_BASE_CLASSES,
  NAVBAR_CONTAINER_CLASSES,
  NAVBAR_BRAND_CLASSES,
  NAVBAR_BRAND_NAME_CLASSES,
  NAVBAR_TOGGLE_BUTTON_CLASSES,
  NAVBAR_MENU_CLASSES,
  NAVBAR_LINKS_CONTAINER_CLASSES,
  NAVBAR_LINK_CLASSES,
  NAVBAR_ACTIVE_LINK_CLASSES,
  NAVBAR_SEARCH_CONTAINER_CLASSES,
  NAVBAR_SEARCH_INPUT_CLASSES,
  NAVBAR_USER_MENU_BUTTON_CLASSES,
  NAVBAR_USER_MENU_AVATAR_CLASSES,
  NAVBAR_USER_MENU_DROPDOWN_CLASSES,
  NAVBAR_USER_MENU_DROPDOWN_ITEM_CLASSES,
} from './constants';
import { useBooleanToggler } from 'resurrection';

const Navbar: FC<NavbarProps> = ({
  brand,
  links,
  dropdowns,
  userMenu,
  cta,
  search,
  className,
}) => {
  const [isMenuOpen, toggleIsMenuOpen] = useBooleanToggler(false);
  const [isUserMenuOpen, toggleIsUserMenuOpen] = useBooleanToggler(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={combineClassNames(NAVBAR_BASE_CLASSES, className)}>
      <div className={NAVBAR_CONTAINER_CLASSES}>
        {/* Brand */}
        {brand && (
          <a href="#" className={NAVBAR_BRAND_CLASSES}>
            {brand.logo && (
              <img src={brand.logo.src} className="h-8" alt={brand.logo.alt} />
            )}
            {brand.name && (
              <span className={NAVBAR_BRAND_NAME_CLASSES}>{brand.name}</span>
            )}
          </a>
        )}

        {/* Mobile menu button */}
        <Button
          variant="outline"
          className={NAVBAR_TOGGLE_BUTTON_CLASSES}
          onClick={toggleIsMenuOpen}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>

        {/* Main menu */}
        <div
          className={combineClassNames(
            NAVBAR_MENU_CLASSES,
            isMenuOpen ? 'block' : 'hidden',
          )}
          id="navbar-default"
        >
          <ul className={NAVBAR_LINKS_CONTAINER_CLASSES}>
            {links?.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={combineClassNames(
                    link.isActive
                      ? NAVBAR_ACTIVE_LINK_CLASSES
                      : NAVBAR_LINK_CLASSES,
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {dropdowns?.map((dropdown) => (
              <li key={dropdown.label}>
                <Dropdown
                  label={dropdown.label}
                  items={dropdown.items}
                  isOpen={openDropdown === dropdown.label}
                  onToggle={() =>
                    setOpenDropdown(
                      openDropdown === dropdown.label ? null : dropdown.label,
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Search */}
        {search && (
          <div className={NAVBAR_SEARCH_CONTAINER_CLASSES}>
            <input
              type="text"
              className={NAVBAR_SEARCH_INPUT_CLASSES}
              placeholder={search.placeholder}
              onChange={(e) => search.onChange?.(e.target.value)}
            />
          </div>
        )}

        {/* User menu */}
        {userMenu && (
          <div className={NAVBAR_USER_MENU_BUTTON_CLASSES}>
            <Button
              variant="outline"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleIsUserMenuOpen}
            >
              <span className="sr-only">Open user menu</span>
              {userMenu.avatar ? (
                <img
                  className={NAVBAR_USER_MENU_AVATAR_CLASSES}
                  src={userMenu.avatar.src}
                  alt={userMenu.avatar.alt}
                />
              ) : (
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-10 h-10 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </Button>
            {isUserMenuOpen && (
              <div className={NAVBAR_USER_MENU_DROPDOWN_CLASSES}>
                {userMenu.name && (
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {userMenu.name}
                    </span>
                  </div>
                )}
                <ul className="py-2">
                  {userMenu.dropdownItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={NAVBAR_USER_MENU_DROPDOWN_ITEM_CLASSES}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        {cta && (
          <a href={cta.href}>
            <Button variant="primary">{cta.label}</Button>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
