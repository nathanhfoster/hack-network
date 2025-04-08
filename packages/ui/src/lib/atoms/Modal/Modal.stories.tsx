import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '.';
import Button from '../Button';
import { useBooleanToggler } from 'resurrection';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = ({ args }: { args: any }) => {
  const [show, toggleShow] = useBooleanToggler(false);

  return (
    <>
      <Button onClick={toggleShow}>Open modal</Button>
      <Modal show={show} onClose={toggleShow} {...args}>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union&apos;s General Data Protection Regulation
            (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
            common set of data rights in the European Union. It requires
            organizations to notify users as soon as possible of high-risk data
            breaches that could personally affect them.
          </p>
        </div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalDemo args={args} />,
};

export const WithTitle: Story = {
  render: (args) => (
    <ModalDemo
      args={{
        ...args,
        title: 'Terms of Service',
      }}
    />
  ),
};

export const WithFooter: Story = {
  render: (args) => {
    const [_show, setShow] = useState(false);
    return (
      <ModalDemo
        args={{
          ...args,
          title: 'Terms of Service',
          footer: (
            <div className="flex gap-2">
              <Button variant="alternative" onClick={() => setShow(false)}>
                Decline
              </Button>
              <Button onClick={() => setShow(false)}>I accept</Button>
            </div>
          ),
        }}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <ModalDemo args={{ size: 'sm' }} />
      <ModalDemo args={{ size: 'md' }} />
      <ModalDemo args={{ size: 'lg' }} />
      <ModalDemo args={{ size: 'xl' }} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <ModalDemo args={{ color: 'blue' }} />
      <ModalDemo args={{ color: 'green' }} />
      <ModalDemo args={{ color: 'red' }} />
      <ModalDemo args={{ color: 'yellow' }} />
      <ModalDemo args={{ color: 'purple' }} />
      <ModalDemo args={{ color: 'gray' }} />
    </div>
  ),
};

export const NonDismissible: Story = {
  render: (args) => (
    <ModalDemo
      args={{
        ...args,
        dismissible: false,
      }}
    />
  ),
};
