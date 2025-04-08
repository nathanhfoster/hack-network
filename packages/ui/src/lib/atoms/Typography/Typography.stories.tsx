import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'inherit',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Typography Text',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1 Text</Typography>
      <Typography variant="body2">Body 2 Text</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography color="primary">Primary Text</Typography>
      <Typography color="secondary">Secondary Text</Typography>
      <Typography color="error">Error Text</Typography>
      <Typography color="warning">Warning Text</Typography>
      <Typography color="info">Info Text</Typography>
      <Typography color="success">Success Text</Typography>
      <Typography color="inherit">Inherit Text</Typography>
    </div>
  ),
};
