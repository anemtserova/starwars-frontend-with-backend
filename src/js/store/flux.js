const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiAddress: "https://3000-amethyst-frog-vb6b6xzd.ws-eu11.gitpod.io",
			user: "sarat",
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			deleteFavs: delFavIndex => {
				let newFavList = getStore().favorites;
				newFavList.filter((el, i) => i != delFavIndex);
				setStore({ favorites: newFavList });
			},
			// addFavorite: name => {
			// 	let newFavorites = getStore().favorites;
			// 	newFavorites.push(name);
			// 	setStore({ favorites: newFavorites });
			// },
			addFavorite: (name, entityType, favId) => {
				let entType = "";
				if (entityType == "person") {
					entType = "person";
				} else if (entityType == "planet") {
					entType = "planet";
				}
				fetch(getStore().apiAddress + "/favorites/" + entType + favId, {
					method: "POST",
					body: JSON.stringify({
						username: getStore().user,
						name: name
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(responseJson => console.log(responseJson))
					.catch(error => console.error("Error:", error));
			},
			loadFavorites: () => {
				fetch(getStore().apiAddress + "/" + getStore().user + "/favorites")
					.then(resp => {
						if (!resp.ok) {
							throw Error(resp.statusText);
						}
						return resp.json();
					})
					.then(responseJson => {
						console.log(responseJson);

						setStore({ favorites: responseJson.all_favorites });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
