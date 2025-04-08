'use client';

import { FC, useMemo } from 'react';
import Image from 'next/image';
import {
  BackgroundViewConnectedProps,
  BackgroundViewMapDispatchToProps,
  BackgroundViewMapStateToProps,
  BackgroundViewOwnProps,
} from './types';
import { getBackgroundImage } from './utils';
import { connect } from 'resurrection';
import { RouteState } from '../../context/RouteContext/types';
import { RouteContext } from '../../context/RouteContext';
const Background: FC<BackgroundViewConnectedProps> = ({ pathname }) => {
  const backgroundImage = useMemo(
    () => getBackgroundImage(pathname),
    [pathname],
  );

  return (
    <Image
      src={backgroundImage}
      alt="Background"
      fill
      priority
      quality={100}
      className="fixed top-0 left-0 object-cover z-[-1] brightness-50"
    />
  );
};

export default connect<
  BackgroundViewMapStateToProps,
  BackgroundViewMapDispatchToProps,
  BackgroundViewOwnProps,
  [RouteState]
>({
  mapStateToPropsOptions: [
    {
      context: RouteContext,
      mapStateToProps: (state) => ({ pathname: state.pathname }),
    },
  ],
})(Background);
