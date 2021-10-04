import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
	return (
		<div className="container  p-4 footer-container mt-3">
			<div className="d-flex align-items-center  justify-content-between text-white">
				<div>
					<h3>PHONE SUPPORT</h3>
					<p>24 HOURS A DAY</p>
					<p>
						<small>+ 01 345 647 745</small>
					</p>
				</div>
				<div>
					<h3>CONNECT WITH US</h3>
					<p>SOCIAL MEDIA CHANNELS</p>
				</div>
				<div>
					<h3>NEWSLETTER</h3>
					<p>SIGN UP FOR SPECIAL OFFERS</p>
					<input type="text" placeholder="Email" />
					<br />
					<Button variant="danger" className="m-3">
						SUBSCRIBE
					</Button>
				</div>
			</div>
			<p className="text-warning">© Copyright 2021 Fahim Faysal SIyam</p>
		</div>
	);
};

export default Footer;
