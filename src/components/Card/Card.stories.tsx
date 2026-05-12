import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    suit: "d",
    rank: "A",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    suit: "d",
    rank: "J",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    suit: "d",
    rank: "J",
    variant: "tertiary",
  },
};

export const Quaternary: Story = {
  args: {
    suit: "d",
    rank: "T",
    variant: "quaternary",
  },
};
