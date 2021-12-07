import { useLocation } from "react-router-dom";
import "./aboutbook.style.scss";

const AboutBook = () => {
  const location = useLocation();
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <img src={location.state._image} alt="book" />
        </div>
        <div className="col-sm-8">
          <h5>{location.state._name}</h5>
          <p>Book Price: {location.state._price}</p>
          <p>Author Name: {location.state._author}</p>
          <p>Page Count: 100</p>
          <p>ISBN: 12ANJD</p>
          <div className="row button">
            <div className="col-sm-3">
              <button
                className="btn btn-outline-primary btn-sm"
                //   onClick={addToCart()}
              >
                Add to cart
              </button>
            </div>
            <div className="col-sm-3">
              <button
                className="btn btn-outline-primary btn-sm"
                //   onClick={checkout()}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-8">
          <h6>Description</h6>
          <p>{location.state._description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutBook;
