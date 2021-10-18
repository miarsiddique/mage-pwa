// import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
// https://jsonplaceholder.typicode.com/users

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                <Nav.Link><Link to="users">User</Link></Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about" component={About} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/" component={Home} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
