import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";




export const Card = () => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({});
	const { id, nature } = useParams()


	const getCharacterInfo = () => {
		let result = store[nature].find((item) => item._id === id)
		setCharacter(result)
		console.log(result)
	}

	// const getCharacterInfo = async () => {

	// 	let characterInfo = store.people
	// 		.concat(store.planets)
	// 		.find((item) => item._id === id)
	// 	setCharacter(characterInfo)

	// 	console.log(nature)
	// }

	useEffect(() => { getCharacterInfo() }, [store.people, store.planets])

	return (
		<>
			{
				nature == "people" ?
					<div className="container fluid m-4">
						<div className="row justify-content-center">
							<div className="card mb-3">
								<div className="row g-0">
									<div className="col-md-4">
										<img className="my-img" src={`https://starwars-visualguide.com/assets/img/characters/${character?.uid}.jpg`} />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h1 className="bg-secondary text-center p-3"> {character?.properties?.name}</h1>
											<h2 className="card-text">Description</h2>
											<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
											<div className="d-flex justify-content-betweenrow justify-content-between">
												<h3 >Height<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.height}</span></h3>
												<h3 >Mass<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.mass}</span></h3>
												<h3 >Skin Color<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.skin_color}</span></h3>
												<h3>Gender<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.gender}</span></h3>
												<h3 >Hair Color<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.hair_color}</span></h3>
												<h3 >Eye Color<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.eye_color}</span></h3>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link className="d-flex justify-content-center" to="/">
							<button className="mt-2 btn btn-primary">Go back</button>
						</Link>
					</div> :
					nature == "planets" ?
						<div className="container fluid m-4">
							<div className="row justify-content-center">
								<div className="card mb-3">
									<div className="row g-0 d-flex align-items-center">
										<div className="col-md-4">
											<img className="my-img" src={`https://starwars-visualguide.com/assets/img/planets/${character?.uid}.jpg`} />
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h1 className="bg-warning text-center p-3"> {character?.properties?.name}</h1>
												<h2 className="card-text">Description</h2>
												<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
												<div className="d-flex justify-content-betweenrow justify-content-around  flex-wrap">
													<h3 className="text-center">Population<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.population}</span></h3>
													<h3 className="text-center">Terrain<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.terrain}</span></h3>
													<h3 className="text-center">Climate<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.climate}</span></h3>
													<h3 className="text-center">Gravity<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.gravity}</span></h3>
													<h3 className="text-center">Diameter<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.diameter}</span></h3>
													<h3 className="text-center">Water<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.surface_water}</span></h3>
												</div>
											</div>
										</div>
									</div>
								</div>
								<Link className="d-flex justify-content-center" to="/">
									<button className="mt-2 btn btn-primary">Go back</button>
								</Link>
							</div>
						</div> :
						<div className="container fluid m-4">
							<div className="row justify-content-center">
								<div className="card mb-3">
									<div className="row g-0 d-flex align-items-center">
										<div className="col-md-6">
											<img className="my-img-detail" src={`https://starwars-visualguide.com/assets/img/vehicles/${character?.uid}.jpg`} />
										</div>
										<div className="col-md-6">
											<div className="card-body">
												<h1 className="bg-success text-center p-3"> {character?.properties?.name}</h1>
												<h2 className="card-text">Description</h2>
												<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
												<div className="d-flex justify-content-betweenrow justify-content-around  flex-wrap">
													<h3 className="text-center">Cost<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.cost_in_credits}</span></h3>
													<h3 className="text-center">Model<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.model}</span></h3>
													<h3 className="text-center">Crew<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.crew}</span></h3>
													<h3 className="text-center">Length<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.length}</span></h3>
													<h3 className="text-center">Passengers<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.passengers}</span></h3>
													<h3 className="text-center">Cargo Capacity<br></br> <span className="m-3 badge bg-secondary">{character?.properties?.cargo_capacity}</span></h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Link className="d-flex justify-content-center" to="/">
								<button className="mt-2 btn btn-primary">Go back</button>
							</Link>
						</div>

			}

		</>
	);
};