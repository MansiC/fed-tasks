import "./order.style.scss";
import axios from "axios";
import { useEffect } from "react";
import { OrderModel } from "../../Model/OrderModel";
import OrderDisplay from "./OrderDisplay";

const orders: [OrderModel[]] = [[]];

const Order = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => orders.push(res.data));
    // eslint-disable-next-line
  }, [orders]);

  return (
    <div>
      {orders[orders.length - 1].map((order) => (
        <div className="container my-4 b-1">
          <OrderDisplay order={order} />
        </div>
      ))}
    </div>
  );
};

export default Order;
