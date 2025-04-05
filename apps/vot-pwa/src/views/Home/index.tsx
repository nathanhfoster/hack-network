'use client';

import { FC } from 'react';
import { connect } from 'resurrection';
import {
  AdminDispatchContext,
  AdminStateContext,
  adminContextActions,
} from '../../context/AdminContext';
import {
  HomeViewConnectedProps,
  HomeViewMapDispatchToProps,
  HomeViewMapStateToProps,
  HomeViewOwnProps,
} from './types';
import { AdminServerProps } from '../../context/AdminContext/types';
import { Button } from '@hack-network/ui';

const HomeView: FC<HomeViewConnectedProps> = ({ theme, UpdateSettings }) => {
  const handleUpdateSettings = () => {
    UpdateSettings({ language: 'spanish', theme: 'dark' });
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={handleUpdateSettings}>Update Settings</Button>
      <div>
        <h2>Settings</h2>
        <ul>
          <li>Theme: {theme}</li>
        </ul>
      </div>
    </div>
  );
};

export default connect<
  HomeViewMapStateToProps,
  HomeViewMapDispatchToProps,
  HomeViewOwnProps
>({
  mapStateToPropsOptions: [
    {
      context: AdminStateContext,
      mapStateToProps: (state: AdminServerProps) => ({
        theme: state.settings.theme,
      }),
    },
  ],
  mapDispatchToPropsOptions: [
    {
      context: AdminDispatchContext,
      mapDispatchToProps: {
        UpdateSettings: adminContextActions.UpdateSettings,
      },
    },
  ],
})(HomeView);
