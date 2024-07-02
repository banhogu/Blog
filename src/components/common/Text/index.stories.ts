import type { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Hello World',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {},
};

export const SizedText: Story = {
  args: {
    size: '2xl',
  },
};

export const ColoredText: Story = {
  args: {
    color: 'red',
  },
};

export const WeightText: Story = {
  args: {
    weight: 'bold',
  },
};
