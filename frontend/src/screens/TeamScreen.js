import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import group from '../images/heros/DSC02881.jpg'
import corey from '../images/heros/_DSC7743.jpg'
import logan from '../images/heros/jeepMud.jpg'
import vinson from '../images/heros/m3.JPG'
import chris from '../images/heros/threeWheel3.jpg'
import andrew from '../images/heros/g35.jpg'
import camel from '../images/heros/coupeCom.jpg'

export default function TeamScreen() {
	return (
		<div>
			<div class="content-team">
				<div class="container">
					<div class="row content_bottom-text">
						<div class="col-md-7">
						</div>
					</div>
				</div>
			</div>

			<br></br>
			<br></br>

			<div class="meetTheTeam">
				<h3>Meet The Team</h3>
			</div>

			<br></br>
			<br></br>


			<CardDeck>
				<Card>
					<Card.Img variant="top" src={corey}/>
					<Card.Body>
						<Card.Title>Corey Diliberto</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
      					</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Co-Founder</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={corey} />
					<Card.Body>
						<Card.Title>Logan Surrat</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Co-Founder</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={vinson} />
					<Card.Body>
						<Card.Title>Vinson Cernuto</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
      				</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Marketing | Driver</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={chris} />
					<Card.Body>
						<Card.Title>Chris Rios</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
      				</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Driver & Almost King of OSW</small>
					</Card.Footer>
				</Card>
			</CardDeck>

			<CardDeck>
				<Card>
					<Card.Img variant="top" src={andrew} />
					<Card.Body>
						<Card.Title>Andrew Grindle</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
      					</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Driver</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src={camel} />
					<Card.Body>
						<Card.Title>Camel</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Driver</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</div>
	)
}
