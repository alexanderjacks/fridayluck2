import React from 'react'
import { Link } from 'gatsby'

const Home = () => <div>
  <h1>Home</h1>
	<p>You're now logged in! <Link to="/app/profile">View basic profile page</Link></p>
	<p>We're building features, so stay tuned.</p>
	<p>Admin users need the ability to delete and edit posts, to elevate other users to admin status, and finally to delete users.</p>
	</div>

export default Home