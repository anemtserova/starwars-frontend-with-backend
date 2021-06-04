import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Details = props => {
	const { store, actions } = useContext(Context);
	let state = useLocation().state;
	return (
		<div className="card m-5" style={{ maxWidth: "40rem" }}>
			<div className="d-flex ">
				<div>
					<img className="img-size" src={state.cardImg} alt="..." />
				</div>
				<div className="">
					<div className="card-body">
						<h5 className="card-title">{state.entity.name}</h5>
						<p className="card-text">
							{Object.keys(state.entity)[1]}: {Object.values(state.entity)[1]}
						</p>
						<p className="card-text">
							{Object.keys(state.entity)[2]}: {Object.values(state.entity)[2]}
						</p>
						<p className="card-text">
							{Object.keys(state.entity)[3]}: {Object.values(state.entity)[3]}
						</p>
						<p className="card-text">
							{Object.keys(state.entity)[4]}: {Object.values(state.entity)[4]}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
