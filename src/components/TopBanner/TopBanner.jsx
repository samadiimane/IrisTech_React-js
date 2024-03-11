import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>

                    <Container fluid={true} className="topFixedBanner p-0" >
                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTitle">Iris Tech</h1>
                                        <h4 className="topSubTitle">Where Vision Meets Technology</h4>
                                        <Button variant="primary">Learn More</Button>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>

            </Fragment>
        )
    }
}

export default TopBanner