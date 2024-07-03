import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './index'

const meta = {
  title: 'Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSpinner: Story = {
  args: {},
}