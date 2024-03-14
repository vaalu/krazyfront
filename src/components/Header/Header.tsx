import React, { ReactNode } from 'react'
import './Header.css'
export type HeaderProps = {
	level:number
	label:string
	children:ReactNode
	className?:string
}
export const Header = ({ level, className , children }:HeaderProps) => {
	const Heading = `h${ level }`
	const cssClass = { className : "defaultHeader"} 
	return React.createElement(Heading, cssClass, children)
}