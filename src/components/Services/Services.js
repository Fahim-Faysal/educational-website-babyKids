import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
	const [ courses, setCourses ] = useState([]);
	useEffect(() => {
		fetch('./subject.json').then((res) => res.json()).then((data) => setCourses(data));
	}, []);

	return (
		<div className="m-5 container">
			<h1 className="text-success mx-auto mb-5">Our Services for Beloved Students</h1>
			<Row xs={1} md={3} className="g-5 ms-5">
				{courses.map((course) => (
					<Col key={course.id}>
						<Card>
							<Card.Img variant="top" src={course.img} />
							<Card.Body>
								<Card.Title>{course.name}</Card.Title>
								<Card.Text>{course.description}</Card.Text>
								<h5>Duration : {course.course_duration}</h5>
								<h5>Number of Class : {course.num_of_class}</h5>
								<h3>Price : ${course.price}</h3>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Services;
