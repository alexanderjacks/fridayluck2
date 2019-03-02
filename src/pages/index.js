import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Jacks Kicks 🃋✌️</h1>
    <p>🗞 Ahoy folks here's a new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>🚧 Mind the coarse styling, this here's an Alpha version.</p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default IndexPage
