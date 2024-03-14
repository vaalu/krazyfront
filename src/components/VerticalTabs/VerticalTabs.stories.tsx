import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalTabs } from './VerticalTabs'
import mocks from './__mocks__/VerticalTabs.mock'
const tabsMeta : Meta<typeof VerticalTabs>= {
	title: "krazyfront/VerticalTabs",
	component: VerticalTabs,
	tags: [
		"autodocs"
	],
	parameters: {
		items: mocks
	},
	argTypes: {
		items: { control: { type: "text" } }
	}

} 
export default tabsMeta
export const DefaultVerticalTabs: Story = {
	parameters: {
		items: mocks
	},
	argTypes: {
		items: { control: { type: "text" } }
	},
	render: () => {
		return (<VerticalTabs items = {mocks} />)
	}
}
type Story = StoryObj<typeof tabsMeta>
