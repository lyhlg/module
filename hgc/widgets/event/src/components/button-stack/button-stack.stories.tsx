import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import type { ComponentProps } from 'react'
import ButtonStack from './button-stack'

// meta is the configuration object for the story
const meta: Meta<typeof ButtonStack> = {
  title: 'ButtonStack',
  component: ButtonStack,
}

export default meta
type Story = StoryObj<typeof meta>

// Arguments are passed to the component as props
export const Default: Story = {
  args: {},
}

// Optaional) Scenario Story is optional (if you want to add more stories)
type Props = ComponentProps<typeof ButtonStack>
const StoryRender = (props: Props) => {
  return <ButtonStack {...props} />
}
export const Scenario: Story = {
  render: (args: Props) => <StoryRender {...args} />,
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
