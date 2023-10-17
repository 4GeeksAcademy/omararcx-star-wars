import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<i className="fs-2 fw-bold fa-brands fa-jedi-order"> Star Wars</i>
			<div className="ml-auto">
				<button className="btn btn-secondary dropdown-toggle bg-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos ({store.favorites.length})
				</button>
				<ul className="dropdown dropdown-menu dropdown-menu-end bg-warning">
					{
						store.favorites.map((item) => {
							return (
								<li key={item._id} className="d-flex justify-content-between align-items-center">
									<p className="dropdown-item my-1">{item.properties.name}</p><i onClick={() => actions.deleteFavorite(item)} className="fa-solid fa-trash mx-2"></i>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
};
