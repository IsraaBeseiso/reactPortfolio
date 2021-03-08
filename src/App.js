import react from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/Portfolio';
import Contact from './pages/Contact';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Israa Beseiso',
      headerLinks: [
      { title: 'home', path: '/' },
      { title: 'about', path: '/about' },
      { title: 'contact', path: '/contact' },
      ],
      home: {
        title: 'welcome to my portfolio',
        text: 'checkout my page'
      },
      about: {
        title: 'portfolio'
      },
      contact: {
        title: 'contact me'
      }
    }
  }


 render() {
  return ( 
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Israa Beseiso</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <Home title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />}/>
        <Route path="/about" render={() => <About title={this.state.home.title} />}/>
        <Route path="/contact" render={() => <Contact title={this.state.home.title} />}/>
       <Footer/>

      </Container>
      </Router>
    
  );
 }
}

export default App;
