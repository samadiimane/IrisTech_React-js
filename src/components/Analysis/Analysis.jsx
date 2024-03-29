import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                { technology: 'PHP', projects: 100 },
                { technology: 'MySqli', projects: 90 },
                { technology: 'Laravel', projects: 95 },
                { technology: 'React', projects: 85 },
                { technology: 'Opencart', projects: 80 },
                { technology: 'Vue Js', projects: 70 },
                { technology: 'Django', projects: 60 },
                { technology: 'JavaScript', projects: 100 }
            ]
        }
    }

    render() {
        var blue = "#051b35"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div style={{ width: '100%', height: '300px' }}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="technology" />
                                    <Tooltip />
                                    <Bar dataKey="projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            </div>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDescription">Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>

                                I am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br></br><br></br>

                                Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.
                            </p>
                        </Col>
                    </Row>
                </Container>


            </Fragment>
        )
    }
}

export default Analysis