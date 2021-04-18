import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import IndivProdPage from './Pages/IndivProdPage/IndivProdPage'
import Cart from './Pages/Cart/Cart'
import CheckOut from './Pages/CheckOut/CheckOut'
import { useSelector} from "react-redux";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {

  const order = useSelector((reducer) => reducer.indOrder);
  const CartData = useSelector(reducer => reducer.cart) 
  console.log("THIS IS ORDER")
  console.log(order);

  return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/product/:id' component = {IndivProdPage} />
          <Route exact path = '/cart' component = {Cart} />
          {
            CartData.length ? <Route exact path = '/checkout' component = {CheckOut} /> : <h6>NO ROUTE</h6>
          }
          <Route exact path = '/confirmedOrder' component = {Cart} />
          
        </Switch>
      </Router>
    
  );
}

export default App;
