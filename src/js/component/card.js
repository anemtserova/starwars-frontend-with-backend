import React from "react";
import PropTypes from "prop-types";

export const Card = props => (
	<div className="card" style={{ width: "18rem" }}>
		<img src={props.cardImg} className="card-img-top " alt="..." />
		<div className="card-body">
			<h5 className="card-title">{props.person.name}</h5>
			<p className="card-text">
				{props.label1}
				{props.person.height}
			</p>
			<p className="card-text">
				{props.label2}
				{props.person.eye_color}
			</p>
			<p className="card-text">
				{props.label3}
				{props.person.birth_year}
			</p>
			<p className="card-text">
				{props.label4}
				{props.person.gender}
			</p>
			<button type="button" className="btn btn-success">
				Read More
			</button>
			<span>
				<button type="button" className="btn btn-warning">
					<i className="far fa-heart" />
				</button>
			</span>
		</div>
	</div>
);

Card.propTypes = {
	person: PropTypes.object,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	label4: PropTypes.string,
	cardImg: PropTypes.string
};
