import TestRenderer from 'react-test-renderer'
import React from 'react'
import { Header } from '../Header'
import { HeaderMockData } from '../../../setupTests'

describe('Header', () => {
	it('Headers with levels test', () => {
		const tree = TestRenderer.create(
		<Header {...HeaderMockData[0]}>{ HeaderMockData[0].label }</Header>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})