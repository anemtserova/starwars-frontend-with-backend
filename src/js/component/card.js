import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	let found = store.favorites.find(elem => elem == props.entity.name);
	console.log(found);

	return (
		<Fragment>
			<div className="card m-3 bg-dark text-light" style={{ width: "18rem" }}>
				<img src={props.cardImg} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.entity.name}</h5>
					<p className="card-text">
						{Object.keys(props.entity)[1]}: {Object.values(props.entity)[1]}
					</p>
					<p className="card-text">
						{Object.keys(props.entity)[2]}: {Object.values(props.entity)[2]}
					</p>
					<p className="card-text">
						{Object.keys(props.entity)[3]}: {Object.values(props.entity)[3]}
					</p>
					<p className="card-text">
						{Object.keys(props.entity)[4]}: {Object.values(props.entity)[4]}
					</p>
					<Link
						to={{
							pathname: "/details/" + props.index,
							state: { entity: props.entity, cardImg: props.cardImg }
						}}>
						<button type="button" className="btn btn-primary">
							Read More
						</button>
					</Link>
					<span>
						<button
							onClick={
								found
									? null
									: () =>
											actions.addFavorite(
												props.entity.name,
												props.entity.entyty_type,
												props.entity.entity_id
											)
							}
							type="button"
							className="btn btn-danger m-2">
							{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
						</button>
					</span>
				</div>
			</div>
		</Fragment>
	);
};

Card.propTypes = {
	entity: PropTypes.object,
	index: PropTypes.number,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	label4: PropTypes.string,
	cardImg: PropTypes.string
};
