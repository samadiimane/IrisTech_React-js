import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

class TopNavigation extends Component {

    constructor() {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo], // object
            navBarBack: "navBackground",
            navVariant:"dark",
            navBarItem: "navItem"
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})
        } else if (window.scrollY < 100) {
            this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>

                <Navbar className={this.state.navBarBack + " px-3"} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"> <img src={this.state.navBarLogo} alt=''/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SERVICE</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        )
    }
}

export default TopNavigation