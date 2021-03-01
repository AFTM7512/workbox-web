import React from "react";
import AsyncComponents from "../../components/async-components/AsyncComponents.jsx";

import {
  Switch,
  Route,
} from "react-router-dom";



const CustomerSalePage = AsyncComponents(() => import('./sale/CustomerSale.jsx'));
const CustomerOrderPage = AsyncComponents(() => import('./order/CustomerOrder.jsx'));


const router = () => (
  <Switch>
    <Route path="/customer/sale" component={CustomerSalePage} ></Route>
    <Route path="/customer/order" component={CustomerOrderPage} ></Route>
  </Switch>
);

export default router;