import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from '.';
import ButtonGroupItem from './ButtonGroupItem';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>Profile</ButtonGroupItem>
      <ButtonGroupItem>Settings</ButtonGroupItem>
      <ButtonGroupItem>Messages</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ButtonGroup outline>
      <ButtonGroupItem>Profile</ButtonGroupItem>
      <ButtonGroupItem>Settings</ButtonGroupItem>
      <ButtonGroupItem>Messages</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const WithActiveState: Story = {
  render: () => (
    <ButtonGroup outline>
      <ButtonGroupItem isActive>Profile</ButtonGroupItem>
      <ButtonGroupItem>Settings</ButtonGroupItem>
      <ButtonGroupItem>Messages</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup variant="primary">
        <ButtonGroupItem>Profile</ButtonGroupItem>
        <ButtonGroupItem>Settings</ButtonGroupItem>
        <ButtonGroupItem>Messages</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup variant="secondary">
        <ButtonGroupItem>Profile</ButtonGroupItem>
        <ButtonGroupItem>Settings</ButtonGroupItem>
        <ButtonGroupItem>Messages</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup variant="dark">
        <ButtonGroupItem>Profile</ButtonGroupItem>
        <ButtonGroupItem>Settings</ButtonGroupItem>
        <ButtonGroupItem>Messages</ButtonGroupItem>
      </ButtonGroup>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup size="sm">
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup size="md">
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
      </ButtonGroup>
    </div>
  ),
};
