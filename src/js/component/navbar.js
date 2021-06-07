import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropdown, setClickedDropdown] = useState(false);
	// let show = "";
	// if (clickedDropdown) show = "show";

	return (
		<nav className="navbar navbar-light bg-theme">
			<div className="m-auto d-flex align-items-center">
				<Link to="/">
					<img
						src="https://s2.qwant.com/thumbr/474x355/d/8/d51ec8e1645879f6240dc8174e2744573b739b3775975d3ad35b2370198cd7/th.jpg?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EPNdWHyX5uLGM-d886JZkwHaFj%26pid%3DApi&q=0&b=1&p=0&a=0"
						className="navbar-brand m-auto w-75 h-auto "
					/>
				</Link>
				<div className="dropdown mr-5 ">
					<button
						onClick={() => store.favorites.length > 0 && setShowDropdown(!showDropdown)}
						className="btn btn-primary dropdown-toggle "
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites <span className="badge badge-light">{store.favorites.length}</span>
					</button>
					<div
						className={!clickedDropdown && store.favorites.length > 0 ? "dropdown-menu" : "d-none"}
						aria-labelledby="dropdownMenuButton">
						<ul className="list-group ">
							{store.favorites.map((el, i) => {
								return (
									<>
										<li className="dropdown-item d-flex flex-row justify-content-between" key={i}>
											<span>{el}</span>
											<i
												onClick={() => {
													actions.deleteFavs(i);
												}}
												className="fa fa-trash mr-5 ml-3"
												aria-hidden="true"
											/>
										</li>
									</>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
