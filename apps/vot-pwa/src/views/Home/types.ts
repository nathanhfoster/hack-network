import { AdminSettings } from '../../context/AdminContext/types';
import {
  ConnectedComponentProps,
  ActionCreatorWithPayload,
} from 'resurrection';

export interface HomeViewMapStateToProps {
  theme: AdminSettings['theme'];
}

export type HomeViewMapDispatchToProps = {
  UpdateSettings: ActionCreatorWithPayload<Partial<AdminSettings>>;
};

export type HomeViewOwnProps = object;

export type HomeViewConnectedProps = ConnectedComponentProps<
  HomeViewMapStateToProps,
  HomeViewMapDispatchToProps,
  HomeViewOwnProps
>;
