import React from 'react'
import './Homepage.css'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Homepage = () => {
    return (
        <div>
            <div className="homepage-main">
                <Container>
                    <Row>
                        
                        <Col  className="box2">
                            <h1 className="hero-heading">Popsture is a Global <span>UI/UX design & branding</span> studio</h1>
                            <p className='hero-discrip'>that creates best-in-class digital experiences to help businesses succeed in <br /> today's digital world</p>
                            <div className="button-style">
                                <Button variant="primary">Start Project</Button>{' '}
                            </div>
                        </Col>

                        
                    
                    </Row>
                    
                </Container>       
            </div> 
            <Container fluid> 
                <div > 
                    <div className="box4">
                        <h2 className="box7">Our Services</h2>
                        <p>Form early stage startup to rennowed to brands,<br /> we have plenty of stories to share </p>
                    </div>
                    <div className="box3" >
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px150" />
                            <Card.Body>
                                <Card.Text>
                                    <h6>User studies across various demo graphics, culture to gather both qualitative & quantitative under standing of target personas</h6>
                                </Card.Text>
                                <Card.Text className="card-text-list">
                                    <p>Qualitative Research</p>
                                    <p>Quatitative Studies</p>
                                    <p>Heuristic Evalution</p>
                                    <p>Usability Testing</p>
                                    <p>Competitor Analysis</p>
                                    <p>Global  Benchmarking</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                
                                <Card.Text>
                                    <h6>Combining desgin thinking & businesses thinking to drive insights into products strategy, feature prioritisation,growth etc</h6>
                                </Card.Text>
                                <Card.Text className="card-text-list">
                                    <p>Design Thinkig</p>
                                    <p>Product Strategy</p>
                                    <p>Product Roadmap</p>
                                    <p>Service Design</p>
                                    <p>Design Principals</p>
                                    <p>Design MVP/MLP</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                
                                <Card.Text>
                                    <h6>Top notch design experiences across voice,web,mobile,AR/VR Etc to deliver value across platforms & emerging media</h6>
                                </Card.Text>
                                <Card.Text className="card-text-list">
                                    <p>Branding & illustration</p>
                                    <p>Interaction Design</p>
                                    <p>Interface & Visual Design</p>
                                    <p>Prototyping & Usability testing</p>
                                    <p>Fornt end development</p>
                                    <p>Micro interaction & motion</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>

            <div>
                <Container fluid className="box5 bg-danger p-5">
                    <Row>
                        <Col className="bg-primary box6">
                            <video  autoPlay muted>
                                <source src="./assets/videos/sample.mp4" type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className='client-container'>
                                <h2>Our Recent Clients</h2>
                                <p>From early stage startup to rennowed brannds,<br /> we have plenty of stories to share</p>

                            </div>
                            <div>
                            

                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default Homepage;
