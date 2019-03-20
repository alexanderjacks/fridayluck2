import React from 'react'
import { Link } from 'gatsby'

const Home = () => <div>
  <h1>Home</h1>
	<p>You're now logged in! <Link to="/app/profile">View basic profile page</Link></p>
	<p>We're building features, so stay tuned.</p>
	<p>Admin users need</p>
	<ul>
	<li>the ability to delete posts, </li>
	<li>the ability to edit posts, </li>
	<li>feature to elevate other users to Admin status,</li>
	<li>and finally to delete users.</li>
	</ul>
	</div>

export default Home