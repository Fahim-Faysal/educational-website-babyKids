import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/about_us.jpg';

const AboutUS = () => {
	return (
		<div>
			<div>
				<img className="w-50  m-5" src={img} alt="" />
			</div>
			<Container>
				<Row className="m-3">
					<Col>
						<h1>
							<span className="text-success">01.</span> Experience
						</h1>
						<p>
							we have lots of Experience teacher to assist the student and make them bacome a good student
						</p>
					</Col>
					<Col>
						<h1>
							<span className="text-danger">02.</span> Professionality
						</h1>
						<p>
							This is one of the main focused things of our school. So we try to teach such a way that
							they can shine in life
						</p>
					</Col>
				</Row>
				<Row className="m-3">
					<Col>
						<h1>
							<span className="text-info">03.</span> Guarantee
						</h1>
						<p>we gruantee to provide more jacitlities for our students for better understanding</p>
					</Col>
					<Col>
						<h1>
							<span className="text-primary">04.</span> Quality
						</h1>
						<p>We won't compromise with our qulaity so the childere can get the best education form here</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutUS;
