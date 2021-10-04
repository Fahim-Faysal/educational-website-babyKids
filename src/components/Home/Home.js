import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/cover.jpg';
import abc from '../../Logo/abc.jpg';
import math from '../../Logo/math.png';
import writing from '../../Logo/Writing.png';
import gk from '../../Logo/Gk.jpg';

const Home = () => {
	return (
		<div>
			<img src={img} alt="" />
			<div>
				<h1 className="text-success">Our Services</h1>
				<Container>
					<Row className="m-5 g-5">
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={abc} />
								<Card.Body>
									<Card.Title>Introduction to Alphabets</Card.Title>
									<Card.Text>
										<p>
											We introduce the letter then add it to our “plate”, which is our brain. We
											talk about how the letter looks, and how you form the letter.
										</p>
										<h2>Price : $100</h2>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={writing} />
								<Card.Body>
									<Card.Title>Handwriting for new Kids</Card.Title>
									<Card.Text>
										<p>
											Handwriting, writing with the hand as distinguished from print. The term
											handwriting has come to be more or less restricted to mean the form of
											writing peculiar to each person.
										</p>
										<h2>Price : $200</h2>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={math} />
								<Card.Body>
									<Card.Title>Math for Kids</Card.Title>
									<Card.Text>
										<p>
											Simple math for the kids for counting so that they can count. It is a
											beginner friendly course for the kids.Simple math for the kids for counting
											so that they can count. It is a beginner friendly course for the kids
										</p>
										<h2>Price : $50</h2>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={gk} />
								<Card.Body>
									<Card.Title>General Knowledge</Card.Title>
									<Card.Text>
										<p>
											General knowledge is information that has been accumulated over time through
											various mediums.
										</p>
										<h2>Price : $40</h2>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Home;
