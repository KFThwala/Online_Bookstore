import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container">
			<div className="home-wrapper">
				<div className="welcome_container">
					<h1>Welcome to the book club</h1>
					<p>Join the community of book lovers</p>
					<Link to="/signup">
						<button className="welcome_button">Join now</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
