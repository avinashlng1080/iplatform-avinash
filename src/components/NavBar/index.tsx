import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

import { iconFavorite, iconMusic } from '../../assets/images'
import { routeArtistFinder, routeUserFavorites, routeMusicReleases } from '../../utils/Routes'
import './Styles.css'

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">iPlatform Music</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to={routeMusicReleases}>
            MusicBrainz
        </Nav.Link>
        <Nav.Link as={NavLink} to={routeArtistFinder}>
          <img src={iconMusic} alt="Last fm" className="NavBarIcons" />
            Last.fm
        </Nav.Link>
        <Nav.Link as={NavLink} to={routeUserFavorites}>
          <img src={iconFavorite} alt="Your Favorites" className="NavBarIcons" />
            Favorites
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
