import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
