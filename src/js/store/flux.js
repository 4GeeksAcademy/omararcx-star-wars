const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: []
		},

		actions: {

			getPeople: async () => {
				let store = getStore()
				try {
					if (store.people.length <= 0) {
						let response = await fetch(`${store.baseURL}/people/`)
						let data = await response.json()

						for (let person of data.results) {
							let responsePerson = await fetch(person.url)
							let dataPerson = await responsePerson.json()
							console.log(dataPerson)
							setStore({
								people: [...store.people, dataPerson.result]
							})
						}
						localStorage.setItem("people", JSON.stringify(store.people))
					}
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				let store = getStore()
				if (store.planets.length <= 0) {
					let response = await fetch(`${store.baseURL}/planets`)
					let data = await response.json()
					for (let planet of data.results) {
						let responsePlanet = await fetch(`${store.baseURL}/planets/${planet.uid}`)
						let dataPlanet = await responsePlanet.json()
						setStore({
							planets: [...store.planets, dataPlanet.result]
						})
					}
					localStorage.setItem("planets", JSON.stringify(store.planets))
				}

			},
			getVehicles: async () => {
				let store = getStore()
				if (store.vehicles.length <= 0) {
					let response = await fetch(`${store.baseURL}/vehicles`)
					let data = await response.json()
					for (let vehicle of data.results) {
						let responseVehicle = await fetch(`${store.baseURL}/vehicles/${vehicle.uid}`)
						let dataVehicle = await responseVehicle.json()
						setStore({
							vehicles: [...store.vehicles, dataVehicle.result]
						})
					}
					localStorage.setItem("vehicles", JSON.stringify(store.vehicles))
				}

			},
			addFavorite: (itemToSave) => {
				let store = getStore()
				let exists = store.favorites.some((item) => item._id == itemToSave._id)
				if (exists) {
					let newArr = store.favorites.filter((item) => item._id != itemToSave._id)

					setStore({
						favorites: newArr
					})
				} else {
					setStore({
						favorites: [...store.favorites, itemToSave]
					})
				}

			},
			deleteFavorite: (itemToDelete) => {
				let store = getStore()
				let exists = store.favorites.some((item) => item._id == itemToDelete._id)
				if (exists) {
					let newArr = store.favorites.filter((item) => item._id != itemToDelete._id)

					setStore({
						favorites: newArr
					})
				} else {

				}
				
			}
		}
	}
}

export default getState;
