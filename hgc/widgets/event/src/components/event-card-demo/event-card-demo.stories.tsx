import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import type { ComponentProps } from 'react';
import EventCardDemo from './server/event-card-demo';

// meta is the configuration object for the story
const meta: Meta<typeof EventCardDemo> = {
  title: 'EventCardDemo',
  component: EventCardDemo,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Arguments are passed to the component as props
export const Default: Story = {
  args: {},
};

// Optaional) Scenario Story is optional (if you want to add more stories)
type Props = ComponentProps<typeof EventCardDemo>;
const StoryRender = (props: Props) => {
  return <EventCardDemo {...props} />;
};
export const Scenario: Story = {
  render: (args: Props) => <StoryRender {...args} />,
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
