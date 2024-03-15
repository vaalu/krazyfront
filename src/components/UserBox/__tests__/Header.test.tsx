import TestRenderer from 'react-test-renderer'
import React from 'react'
import { UserBox } from '../UserBox'

describe('Header', () => {
	it('Headers with levels test', () => {
		const tree = TestRenderer.create(
		<UserBox />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})