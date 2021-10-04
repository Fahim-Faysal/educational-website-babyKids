import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="d-flex justify-content-between align-items-center head-container container mb-3">
			<div>
				<h2>
					Baby Kids <br /> <small>coaching centre</small>
				</h2>
			</div>
			<div className="mx-5">
				<NavLink
					className="mx-5 text-decoration-none"
					to="/home"
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
				>
					Home
				</NavLink>
				<NavLink
					className="mx-5 text-decoration-none"
					to="/academics"
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
				>
					Academics
				</NavLink>
				<NavLink
					className="mx-5 text-decoration-none"
					to="/service"
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
				>
					Services
				</NavLink>
				<NavLink
					className="mx-5 text-decoration-none"
					to="/about"
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
				>
					About Us
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
