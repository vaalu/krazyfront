import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import mocks from './__mocks__/HeaderMock.mock'
import { Header, HeaderProps } from './Header'

const headerMeta : Meta<typeof Header>= {
	title: "J-Story/Header",
	component: Header,
	tags: [
		"autodocs"
	],
	parameters: {
		layout: "centered",
	},
	args: {
		label: "Default level",
		level: 1,
	},
	argTypes: {
		level: { control: { type: "number" }},
		label: { control: { type: "text" }}, 
		className: { control: { type: "text" }}
	}
} 
export default headerMeta
export const DefaultHeader: Story = {
	args: {
		label: "Default level",
		level: 1,
	},
	argTypes: {
		level: { control: { type: "number" }},
		label: { control: { type: "text" }}, 
		className: { control: { type: "text" }}
	},
	render: ( args: HeaderProps ) => {
		return (<Header { ...args } >{args.label}</Header>)
	}
}
type Story = StoryObj<typeof headerMeta>
export const Level1: Story = {
	render: () => <Header { ...mocks[0] } >{mocks[0].label}</Header>,
}
export const Level2: Story = {
	render: () => <Header { ...mocks[1] } >{mocks[1].label}</Header>,
}
export const Level3: Story = {
	render: () => <Header { ...mocks[2] } >{mocks[2].label}</Header>,
}
