import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import IndivProdPage from './Pages/IndivProdPage/IndivProdPage'
import Cart from './Pages/Cart/Cart'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/product/:id' component = {IndivProdPage} />
          <Route exact path = '/cart' component = {Cart} />
        </Switch>
      </Router>
    
  );
}

export default App;
