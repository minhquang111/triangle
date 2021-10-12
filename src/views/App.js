import './App.scss';
import Nav from './Nav/Nav';
import Container from './Container/Container';
import Details from './Details/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="App-nav" >
            <Nav />
          </div>
          <div className="App-container">
            <Switch>
              <Route path="/" exact>
                <Container type={0} />
              </Route>
              <Route path="/articles">
                <Container type={0} />
              </Route>
              <Route path="/stories">
                <Container type={1} />
              </Route>
              <Route path="/technical">
                <Container type={2} />
              </Route>
              <Route path="/about">
                <Container type={3} />
              </Route>
              <Route path="/details/:id">
                <Details />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
