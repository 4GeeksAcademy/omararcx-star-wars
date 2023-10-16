import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container">
				<h2>Characters</h2>
				<div className="my-carrousel">

					{store.people.map((item) => {
						return (
							<div key={item._id} className="my-card" >
								<img className="my-img" src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} />
								<div className="card-body">
									<h5 className="card-title">{item.properties.name}</h5>
									<p className="card-text">Gender : {item.properties.gender}</p>
									<p className="card-text">Hair Color : {item.properties.hair_color}</p>
									<p className="card-text">Eye Color : {item.properties.eye_color}</p>
									<div className="d-flex justify-content-between">
										<Link to={`/people/${item._id}`}>
											<button href="#" className="btn btn-primary">Learn More</button>
										</Link>
										<button onClick={() => actions.addFavorite(item)} className="btn bg-warning"><i className="fa-solid fa-star"></i></button>
									</div>
								</div>
							</div>
						)
					})}
				</div>

			</div>

			<div className="container">
				<h2>Planets</h2>
				<div className="my-carrousel">
					{store.planets.map((item) => {
						return (

							<div key={item._id} className="my-card" >
								<img className="my-img" src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} />
								<div className="card-body">
									<h5 className="card-title">{item.properties.name}</h5>
									<p className="card-text">Population : {item.properties.population}</p>
									<p className="card-text">Terrain : {item.properties.terrain}</p>
									<div className="d-flex justify-content-between">
										<Link to={`/planets/${item._id}`}>
											<button href="#" className="btn btn-primary">Learn More</button>
										</Link>
										<button onClick={() => actions.addFavorite(item)} className="btn bg-warning"><i className="fa-solid fa-star"></i></button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className="container">
					<h2>Planets</h2>
					<div className="my-carrousel">
						{store.vehicles.map((item) => {
							return (

								<div key={item._id} className="my-card" >
									<img className="my-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} />
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p className="card-text">Cost in Credits : {item.properties.cost_in_credits}</p>
										<p className="card-text">Model : {item.properties.model}</p>
										<div className="d-flex justify-content-between">
											<Link to={`/vehicles/${item._id}`}>
												<button href="#" className="btn btn-primary">Learn More</button>
											</Link>
											<button onClick={() => actions.addFavorite(item)} className="btn bg-warning"><i className="fa-solid fa-star"></i></button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}