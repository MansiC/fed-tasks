import "./cart.style.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-4">
            <div className="fc-c g-1">
              <label htmlFor="shippingAddress" className="fitem fw-normal fs-4">
                Shipping Address
              </label>
              <p className="card p-4 fitem">
                Eastern Street, zipcode-21313
                {/* <strong>{"123 123 123"}</strong> */}
              </p>
              <div className="fc-r g-1">
                <button className="btn btn-primary fitem2">Edit</button>
                <button className="btn btn-primary fitem2">Save</button>
              </div>
            </div>
          </div>
          <div className="col-cs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
            <div className="fc-c g-1">
              <label htmlFor="shippingAddress" className="fitem fw-normal fs-4">
                Shipping Address
              </label>
              <div className="fitem">
                <div className="card fc-r p-2 mb-3 g-1">
                  <img
                    src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg"
                    alt="bookimage"
                    className="fi-c image"
                  />
                  <div className="fc-c fi-c">
                    <label className="fw-bold">A Little Princess</label>
                    <label>Frances Hodgson Burnett</label>
                    <label>{57}</label>
                  </div>
                  <hr />
                  <div className="fc-c g-2">
                    <label htmlFor="quantity" className="fi-c">
                      Quantity
                    </label>
                    <div className="fc-r mc-1 g-2 fi-c">
                      <input type="button" value="-" />
                      {/* onClick={subQuant()} */}
                      <label htmlFor="quantvalue">{1}</label>
                      <input type="button" value="+" />
                    </div>
                  </div>
                </div>
                <div className="fc-r g-1">
                  <button
                    className="btn btn-primary fitem2"
                    onClick={routeChange}
                  >
                    Checkout
                  </button>
                  <button className="btn btn-primary fitem2">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
