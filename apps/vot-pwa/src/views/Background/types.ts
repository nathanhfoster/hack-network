import { ConnectedComponentProps } from 'resurrection';
import { RouteState } from '../../context/RouteContext/types';

export interface BackgroundViewMapStateToProps {
  pathname: RouteState['pathname'];
}

export interface BackgroundViewMapDispatchToProps {
  setPathname: (pathname: RouteState['pathname']) => void;
}

export interface BackgroundViewOwnProps {}

export type BackgroundViewConnectedProps = ConnectedComponentProps<
  BackgroundViewMapStateToProps,
  BackgroundViewMapDispatchToProps,
  BackgroundViewOwnProps
>;
