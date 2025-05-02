import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signUp";
import BookStore from "./pages/bookstore";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/bookstore" element={<BookStore />} />
		</Routes>
	);
}

export default App;
