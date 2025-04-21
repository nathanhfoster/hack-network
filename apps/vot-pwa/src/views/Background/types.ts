import { ConnectedComponentProps } from 'resurrection';
import { RouteState } from '../../context/RouteContext/types';

export type BackgroundViewMapStateToProps = Pick<RouteState, 'pathname'>;

export type BackgroundViewMapDispatchToProps = {};

export type BackgroundViewOwnProps = {};

export type BackgroundViewConnectedProps = ConnectedComponentProps<
  BackgroundViewMapStateToProps,
  BackgroundViewMapDispatchToProps,
  BackgroundViewOwnProps
>;
