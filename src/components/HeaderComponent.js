import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

//React only allows to return 1 elements (here is Jumbotron and NavBar)
//React.Fragement acts as a wrapper around multiple components and it won't create an extra DOM node
//can be written as <> and </> (NOT SUPPORTED EVERYWHERE YET)

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp</h1>
                                <h2>a better way to camp</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
                    <div className='container'>
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;