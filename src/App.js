import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/review/Review";
import Manage from "./Components/Manage/Manage";
import Inventory from "./Components/Inventory/Inventory";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/login/Login";
import Shipment from "./Components/shipment/Shipment";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/privateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  const [UserIdLogged, setUserLoggedIn] = useState({});
  console.log(UserIdLogged);
  return (
    <userContext.Provider value={[UserIdLogged, setUserLoggedIn]}>
      <h2>Name:{UserIdLogged.email}</h2>
      <div className="App">
        <Router>
          <Header></Header>
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
            <PrivateRoute path="/Inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
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
    </userContext.Provider>
  );
}

export default App;
