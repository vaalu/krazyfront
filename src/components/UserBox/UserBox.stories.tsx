import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { UserBox } from './UserBox'
const tabsMeta : Meta<typeof UserBox>= {
	title: "krazyfront/UserBox",
	component: UserBox,
	tags: [
		"autodocs"
	],
	parameters: {
	},
	argTypes: {
		items: { control: { type: "text" } }
	}

} 
export default tabsMeta
export const DefaultVerticalTabs: Story = {
	parameters: {
	},
	argTypes: {
	},
	render: () => {
		return (<UserBox />)
	}
}
type Story = StoryObj<typeof tabsMeta>
