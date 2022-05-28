import React from 'react'
import './Homepage.css'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Homepage = () => {
    return (
        <div>
            <div className="box1">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={10} className="box2 ps-2">
                            <h1 className="hero-heading">Popsture is a Global <span>UI/UX design & branding</span> studio</h1>
                            <p className='hero-discrip'>that creates best-in-class digital experiences to help businesses succeed in <br /> today's digital world</p>
                            <Button className="" variant="primary">Start Project</Button>{' '}
                        </Col>
                        <Col></Col>
                    
                    </Row>
                    
                </Container>       
            </div>  
            <div > 
                <div className="box4">
                    <h2 className="box7">Our Services</h2>
                    <p>Form early stage startup to rennowed to brands,<br /> we have plenty of stories to share </p>
                </div>
                <div className="box3" >
                    <Card style={{ width: '14.5rem' }}>
                        <Card.Img className="bg-secondary" variant="top" src="" />
                        <Card.Body>
                            <Card.Text>
                                User studies across various demo graphics, culture to gather both qualitative & quantitative under standing of target personas
                            </Card.Text>
                            <Card.Text>
                                <li>Qualitative Research</li>
                                <li>Quatitative Studies</li>
                                <li>Heuristic Evalution</li>
                                <li>Usability Testing</li>
                                <li>Competitor Analysis</li>
                                <li>Global  Benchmarking</li>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14.5rem' }}>
                        <Card.Img className="bg-secondary" variant="top" src="" />
                        <Card.Body>
                            
                            <Card.Text>
                                Combining desgin thinking & businesses thinking to drive insights into products strategy, feature prioritisation,growth etc
                            </Card.Text>
                            <Card.Text>
                                <li>Design Thinkig</li>
                                <li>Product Strategy</li>
                                <li>Product Roadmap</li>
                                <li>Service Design</li>
                                <li>Design Principals</li>
                                <li>Design MVP/MLP</li>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14.5rem' }}>
                        <Card.Img className="bg-secondary" variant="top" src="" />
                        <Card.Body>
                            
                            <Card.Text>
                                Top notch design experiences across voice,web,mobile,AR/VR Etc to deliver value across platforms & emerging media
                            </Card.Text>
                            <Card.Text>
                                <li>Branding & illustration</li>
                                <li>Interaction Design</li>
                                <li>Interface & Visual Design</li>
                                <li>Prototyping & Usability testing</li>
                                <li>Fornt end development</li>
                                <li>Micro interaction & motion</li>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
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


                        </Col>
                    </Row>
                </Container>
            </div>
            
                    
            {/*<div className='service_tag'>
                <h2>Our Services</h2>
                <p>Form early stage startup to rennowed to brands,<br /> we have plenty of stories to share </p>
                <div className="service_container">
                    <div className="card">
                        <div className="card__header">
                            <img src="" alt="Research"  width="500" height="200"></img>
                        </div>
                        <div className="card__body">
                            <p>User studies across various demo graphics, culture to gather both qualitative & quantitative under standing of target personas</p>
                            
                                <li>Qualitative Research</li>
                                <li>Quatitative Studies</li>
                                <li>Heuristic Evalution</li>
                                <li>Usability Testing</li>
                                <li>Competitor Analysis</li>
                                <li>Global  Benchmarking</li>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src="" alt="Desgin"  width="500" height="200"></img>
                        </div>
                        <div className="card__body">
                            
                            <p>Combining desgin thinking & businesses thinking to drive insights into products strategy, feature prioritisation,growth etc</p>
                            
                            <li>Design Thinkig</li>
                            <li>Product Strategy</li>
                            <li>Product Roadmap</li>
                            <li>Service Design</li>
                            <li>Design Principals</li>
                            <li>Design MVP/MLP</li>
                            
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src="" alt="Build"  width="500" height="200"></img>
                        </div>
                        <div className="card__body">
                            
                            <p>Top notch design experiences across voice,web,mobile,AR/VR Etc to deliver value across platforms & emerging media</p>
                            
                            
                            
                        </div>
                    </div>
                
                </div>
                </div>*/}
            
            {/*<div className='video__container'>
                <video  autoPlay muted>
                    <source src="videos/sample-mp4-file (1).mp4" type="video/mp4" />
                </video>
            </div>*/}
        </div>
    )
}

export default Homepage;
