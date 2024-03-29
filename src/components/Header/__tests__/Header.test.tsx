import TestRenderer from 'react-test-renderer'
import React from 'react'
import { Header } from '../Header'
import HeaderMock from '../__mocks__/HeaderMock.mock'

describe('Header', () => {
	it('Headers with levels test', () => {
		const tree = TestRenderer.create(
		<Header {...HeaderMock[0]}>{ HeaderMock[0].label }</Header>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})