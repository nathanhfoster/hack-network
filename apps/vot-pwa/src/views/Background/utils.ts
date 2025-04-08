import type { RouteState } from '../../context/RouteContext/types';

export const getBackgroundImage = (pathname: RouteState['pathname']) => {
  console.log({ pathname });

  switch (pathname) {
    case '/':
      return '/images/backgrounds/bg1.jpg';
    case '/admin/':
    case '/admin/view/':
      return '/images/backgrounds/bg2.jpg';
    case '/guild/lore/':
      return '/images/backgrounds/bg3.jpg';
    case '/guild/donate/':
      return '/images/backgrounds/bg4.jpg';
    case '/guild/store/':
      return '/images/backgrounds/bg5.jpg';
    case '/guild/join/':
      return '/images/backgrounds/bg6.jpg';
    case '/guild/team/':
      return '/images/backgrounds/bg7.jpg';
    case '/guild/contests/':
      return '/images/backgrounds/bg8.jpg';
    case '/guild/charters/':
      return '/images/backgrounds/bg9.jpg';
    case '/guild/roster/':
      return '/images/backgrounds/bg10.jpg';
    case '/guild/about/':
      return '/images/backgrounds/bg11.jpg';
    case '/login/':
      return '/images/backgrounds/bg12.jpg';
    case '/profile/':
    case '/profile/[id]/':
      return '/images/backgrounds/bg1.jpg';
    case '/calendar/':
      return '/images/backgrounds/bg2.jpg';
    case '/forms/':
    case '/forms/[id]/':
      return '/images/backgrounds/bg3.jpg';
    case '/media/':
    case '/media/podcasts/':
    case '/media/streams/':
    case '/media/videos/':
    case '/media/galleries/':
      return '/images/backgrounds/bg4.jpg';
    default:
      return '/images/backgrounds/bg1.jpg';
  }
};
