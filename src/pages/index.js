import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>We Stand With Trans Troops
	    <span
	    	role='img'
			aria-label='pride flag'
	    > 🏳️‍🌈 
	    </span>
    </h1>
    <p>
    <span
	    	role='img'
			aria-label='newspaper'
	    >
	    	🗞
	    </span> Ahoy folks this is an under-construction app~website with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p><span
	    	role='img'
			aria-label='construction barrier'
	    >
	    	🚧
	    </span> Mind the coarse styling, this here's an Alpha version.</p>
    <p><span
	    	role='img'
			aria-label='asking hands'
	    >
	    	🙏
	    </span> Please help us test this app. Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default IndexPage
