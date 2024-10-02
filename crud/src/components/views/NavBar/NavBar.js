import styles from './NavBar.module.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const NavBar = () => {
    return (
        <Navbar className={clsx(styles.navbar, "bg-body-tertiary")}>
        <Container>
          <Navbar.Brand><span className={styles.navbarTitle}>Blog.app</span></Navbar.Brand>
          <Nav>
            <Nav.Link className={({ isActive }) => isActive ? clsx(styles.link, styles.linkActive) : styles.link} as={NavLink} to="/"><span className={styles.link}>Home</span></Nav.Link>
            <Nav.Link className={({ isActive }) => isActive ? clsx(styles.link, styles.linkActive) : styles.link} as={NavLink} to="/about"><span className={styles.link}>About</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  export default NavBar;