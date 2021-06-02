import React from "react";

export const Card = () => (
	<div className="card" style="width: 18rem;">
		<img src="..." className="card-img-top " alt="..." />
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text" />
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
