import React from "react";
import "./signup.css";
import LoginImage from "../../../assets/riley-mccullough-XbLqUk8Mep4-unsplash.jpg";
import { Link } from "react-router-dom";

function Signup() {
	return (
		<div className="signup_container">
			<section className="form_section">
				<div className="form_container">
					<img id="logo" src="./books.jpg" alt="logo" />
					<h2>Get Started</h2>
					<p>Welcome Book Worm</p>
					<hr />
					<form>
						<div className="input_container">
							<label>Username</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="username"
							/>
						</div>
						<div className="input_container">
							<label>Email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email"
							/>
						</div>
						<div className="input_container">
							<label>Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
							/>
						</div>

						<button>Sign up</button>

						<small>
							Already have an account?{" "}
							<Link to="/login">
								<span>Login</span>
							</Link>
						</small>
					</form>
				</div>
			</section>
			<section className="image_section">
				<img src={LoginImage} alt="image" />
			</section>
		</div>
	);
}

export default Signup;
