import "./order.style.scss";
import { OrderModel } from "../../Model/OrderModel";
// import OrderItems from "./OrderItems";
// import OrderMenu from "./OrderMenu";
// import OrderTotal from "./OrderTotal";

interface PropType {
  order: OrderModel;
}

const OrderDisplay = ({ order }: PropType) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <p>OrderPlaced: {order.orderedAt}</p>
          <div>
            <p>Status :</p>
            <p
              className={
                order.status === "Delivered" ? "text-success" : "text-danger"
              }
            >
              {order.status}
              {/* <!-- {{ orders[i].orderDate < date ? "Delivered" : "Not Delivered" }} --> */}
            </p>
          </div>
        </div>
        {order.items.map((item) => (
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <img src={item.cover_image} alt="bookimage" />
              </div>
              <div className="col-sm-8">
                <h5>Book: {item.title}</h5>
                <h5>Quantity: {item.qty}</h5>
              </div>
            </div>
          </div>
        ))}
        <div className="card-footer">
          <p className="d-flex justify-content-end mr-5 mb-2">
            <strong>TotalPrice:</strong> {order.grandTotal}/- Rs
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDisplay;
