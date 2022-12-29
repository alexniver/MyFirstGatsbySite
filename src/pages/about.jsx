import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = () => {
  return (
    <Layout pageTitle="About">
      <p>This is About Page</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About me title" />

export default About
