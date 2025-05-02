import React from "react";
import "./bookstore.css";
import power from "../../assets/48.png";

function BookStore() {
	return (
		<div>
			<header>
				{/* <img /> */}
				<h3>Book Store</h3>
				<div className="button_container">
					<button>Log Out</button>
					<div className="letter_name">A</div>
				</div>
			</header>
			<section className="bookstore_text_wrapper">
				<h1>Explore this library of books</h1>
				<p>Beautiful, inspiring, informative, and thought-provoking books</p>
			</section>
			<section className="card_section">
				<div className="card_container">
					<div className="card_image">
						<img src alt="" />
					</div>
					<div className="card_text">
						<p>Book Name</p>
						<small>Author</small>
					</div>
				</div>
				<div className="card_container">
					<div className="card_image">
						<img src={power} alt="" />
					</div>
					<div className="card_text">
						<p>Book Name</p>
						<small>Author</small>
					</div>
				</div>
			</section>
		</div>
	);
}

export default BookStore;
