import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<i className="fs-2 fw-bold fa-brands fa-jedi-order"> Star Wars</i>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-secondary dropdown-toggle bg-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos ({store.favorites.length})
					</button>
					<ul className="dropdown dropdown-menu dropdown-menu-end">
						{
							store.favorites.map((item) => {
								return (
									<li key={item._id}>
										<a className="dropdown-item" href="#">{item.properties.name}</a>
									</li>
								)
							})

						}
					</ul>
				</Link>
			</div>
		</nav>
	);
};
