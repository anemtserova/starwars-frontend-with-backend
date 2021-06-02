import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<img
					src="https://s2.qwant.com/thumbr/474x355/d/8/d51ec8e1645879f6240dc8174e2744573b739b3775975d3ad35b2370198cd7/th.jpg?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EPNdWHyX5uLGM-d886JZkwHaFj%26pid%3DApi&q=0&b=1&p=0&a=0"
					className="navbar-brand mb-2 w-75 h-auto "
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button type="button" className="btn btn-primary">
						Favorites <span className="badge badge-light">4</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
