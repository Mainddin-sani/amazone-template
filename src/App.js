import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/review/Review';
import Manage from './Components/Manage/Manage';
import Inventory from './Components/Inventory/Inventory';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
              <Manage></Manage>
          </Route>
          <Route path="/Inventory">
              <Inventory></Inventory>
          </Route>
          <Route path="/product/:productsKey">
              <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
