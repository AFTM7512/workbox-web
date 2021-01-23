import React from "react";
import Router from './router.js';
// import AsyncComponents from "../../components/async-components/AsyncComponents.jsx";

import {
  Switch,
  Route,
} from "react-router-dom";



// const CustomerSalePage = AsyncComponents(() => import('./sale/CustomerSale.jsx'));
// const CustomerOrderPage = AsyncComponents(() => import('./order/CustomerOrder.jsx'));

export default function Customer() {
  return (
    <div>
      <span>Customer Page</span>

      {/* <Switch>
        <Route path="/customer/sale" component={CustomerSalePage} />
        <Route path="/customer/order" component={CustomerOrderPage} />
      </Switch> */}
      <Router />
    </div>

  );
}
