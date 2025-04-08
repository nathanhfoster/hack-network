import { ConnectedComponentProps } from 'resurrection';
import { RouteState } from '../../context/RouteContext/types';

export type BackgroundViewMapStateToProps = Pick<RouteState, 'pathname'>;

export type BackgroundViewMapDispatchToProps = object;

export type BackgroundViewOwnProps = object;

export type BackgroundViewConnectedProps = ConnectedComponentProps<
  BackgroundViewMapStateToProps,
  BackgroundViewMapDispatchToProps,
  BackgroundViewOwnProps
>;
