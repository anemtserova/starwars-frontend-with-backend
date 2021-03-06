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
			.then(responseJson => {
				setCharacters(responseJson.results);
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
			.then(responseJson => {
				setPlanets(responseJson.results);
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
			.then(responseJson => {
				setVehicles(responseJson.results);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	return (
		<div className="container-fluid" style={{ background: "black" }}>
			<h1 className="text-light mt-4 text-center">Characters</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{characters.length > 0 &&
					characters.map((char, index) => {
						return (
							<Card
								key={index}
								index={index}
								entity={char}
								cardImg="https://cdn.wallpapersafari.com/75/35/xyNhQA.jpg"
							/>
						);
					})}
			</div>
			<h1 className="text-light mt-4 text-center text-light">Planets</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{planets.map((spaceObj, index) => {
					return (
						<Card
							key={index}
							index={index}
							entity={spaceObj}
							cardImg="https://c4.wallpaperflare.com/wallpaper/783/413/224/star-wars-wallpaper-preview.jpg"
						/>
					);
				})}
			</div>
			<div>
				<h1 className="text-light mt-4 text-center text-light">Vehicles</h1>
				<div className="d-flex flex-wrap justify-content-center">
					{vehicles.map((spacecraft, index) => {
						return (
							<Card
								key={index}
								index={index}
								entity={spacecraft}
								cardImg="https://cdna.artstation.com/p/assets/images/images/005/527/466/large/andrew-kirp-falcon-01.jpg?1491709991"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
