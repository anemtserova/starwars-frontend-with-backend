import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/home.scss";
import Card from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => {
				setCharacters(data.results);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});

		fetch("https://swapi.dev/api/planets/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => {
				setPlanets(data.results);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});

		fetch("https://swapi.dev/api/starships/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => {
				setVehicles(data.results);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	return (
		<div className="container-fluid">
			<div>
				<h1>Characters</h1>
				{characters.map((char, index) => {
					<Card person={char} key={index} />;
				})}
			</div>
			<div>
				<h1>Planets</h1>
			</div>
			<div>
				<h1>Vehicles</h1>
			</div>
		</div>
	);
};
