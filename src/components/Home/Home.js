import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/cover.jpg';

const Home = () => {
	const [ courses, setCourses ] = useState([]);
	useEffect(() => {
		fetch('./subject.json').then((res) => res.json()).then((data) => setCourses(data.slice(0, 4)));
	}, []);
	return (
		<div>
			<img src={img} alt="" />
			<div className="container">
				<h1 className="text-success mb-4">Our Services</h1>
				<Row className=" g-5">
					{courses.map((course) => (
						<Col key={course.id} className="p-2">
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={course.img} />
								<Card.Body>
									<Card.Title>{course.name}</Card.Title>
									<Card.Text>{course.description}</Card.Text>

									<h3>Price : ${course.price}</h3>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Home;
