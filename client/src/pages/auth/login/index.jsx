import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="signup_container">
			<section className="form_section">
				<div className="form_container">
					<img id="logo" src="./books.jpg" alt="logo" />
					<h2>Welcome</h2>
					<p>Login to your account</p>
					<hr />
					<form>
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
							Don't have an account{" "}
							<Link to="/signup">
								<span>Signup</span>
							</Link>
						</small>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Login;
