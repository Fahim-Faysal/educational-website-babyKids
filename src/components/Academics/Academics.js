import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Academics = () => {
	const [ teachers, setTeachers ] = useState([]);
	useEffect(() => {
		fetch('./teacher.json').then((res) => res.json()).then((data) => setTeachers(data));
	}, []);
	return (
		<div>
			<h1 className="mx-auto text-success">Our Honorable Teachers</h1>
			<Row xs={1} md={3} className="g-4 container m-5 ms-5">
				{teachers.map((teacher) => (
					<Col>
						<Card>
							<Card.Img variant="top" src={teacher.img} />
							<Card.Body>
								<Card.Title>{teacher.name}</Card.Title>
								<h5>Course Taken : {teacher.course}</h5>
								<p>Age : {teacher.age}</p>
								<small>{teacher.email}</small>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Academics;
