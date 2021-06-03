import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropdown, setClickedDropdown] = useState(false);
	let show = "";
	if (clickedDropdown) show = "show";
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<img
					src="https://s2.qwant.com/thumbr/474x355/d/8/d51ec8e1645879f6240dc8174e2744573b739b3775975d3ad35b2370198cd7/th.jpg?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EPNdWHyX5uLGM-d886JZkwHaFj%26pid%3DApi&q=0&b=1&p=0&a=0"
					className="navbar-brand mb-2 w-75 h-auto "
				/>
			</Link>
			<div className={"ml-auto dropdown" + (showDropdown ? "show" : "")}>
				<button
					onClick={() => setClickedDropdown(!clickedDropdown)}
					type="button"
					className="btn btn-secondary dropdown-toggle"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={clickedDropdown}>
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div
					className={store.favorites.length > 0 ? "dropdown-menu" + show : " d-none"}
					aria-labelledby="dropdownMenuButton">
					{store.favorites.map((el, i) => {
						return (
							<li key={i} className="dropdown-item">
								{el}
							</li>
						);
					})}
					;
				</div>
			</div>
		</nav>
	);
};
