import React from "react";
import AsyncComponents from "../components/async-components/AsyncComponents.jsx";
import {
  Switch,
  Route,
} from "react-router-dom";

const CustomerSalePage = AsyncComponents(() => import('../page/customer/sale/CustomerSale.jsx'));
const CustomerOrderPage = AsyncComponents(() => import('../page/customer/order/CustomerOrder.jsx'));
const CustomerPage = AsyncComponents(() => import('../page/customer/Customer.jsx'));

export default function CustomerRouter() {
  return (
    <div>
      <Switch>
        <Route path="/customer/sale" exact component={CustomerSalePage} />
        <Route path="/customer/order" exact component={CustomerOrderPage} />
      </Switch>
    </div>
  );
}