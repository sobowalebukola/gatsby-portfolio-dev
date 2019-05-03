import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact } from 'Components/landing'

const IndexPage = () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills />
		<Contact />
	</Layout>
)

export default IndexPage
