import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: 'Hello World!',
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {},
}