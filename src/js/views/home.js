import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";

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
			<h1>Characters</h1>
			<div className="d-flex">
				{characters.map((char, index) => {
					return (
						<Card
							key={index}
							person={char}
							label1="Height: "
							label2="Eye color: "
							label3="Birth year: "
							label4="Gender: "
							cardImg="https://i.pinimg.com/originals/ae/17/72/ae17724e86d6faa2509a1f27cb65aea5.png"
						/>
					);
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
