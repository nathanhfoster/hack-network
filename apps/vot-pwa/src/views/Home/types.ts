import { adminContextActions } from '../../context/AdminContext';
import { AdminSettings } from '../../context/AdminContext/types';
import { ConnectedComponentProps } from 'resurrection';

export interface HomeViewMapStateToProps {
  theme: AdminSettings['theme'];
}

export type HomeViewMapDispatchToProps = {
  UpdateSettings: typeof adminContextActions.UpdateSettings;
};

export type HomeViewOwnProps = object;

export type HomeViewConnectedProps = ConnectedComponentProps<
  HomeViewMapStateToProps,
  HomeViewMapDispatchToProps,
  HomeViewOwnProps
>;
