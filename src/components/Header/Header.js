import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="d-flex justify-content-between align-items-center head-container container mb-3">
			<div>
				<h1>Baby Kids</h1>
			</div>
			<div className="mx-5">
				<NavLink className="mx-5 text-decoration-none" to="/home">
					Home
				</NavLink>
				<NavLink className="mx-5 text-decoration-none" to="/courses">
					Courses
				</NavLink>
				<NavLink className="mx-5 text-decoration-none" to="/service">
					Services
				</NavLink>
				<NavLink className="mx-5 text-decoration-none" to="/about">
					About Us
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
