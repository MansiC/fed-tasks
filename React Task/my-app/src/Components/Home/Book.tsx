import { BookModel } from "../../Model/BookModel";
import "./book.style.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

interface BookProps {
  book: BookModel;
}

const Book = ({ book }: BookProps) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/" + book._name, { state: book });
  };

  return (
    <div className="card">
      <div className="card-body">
        <img src={book._image} alt="" onClick={routeChange} />
        <div>
          <h6 className="card-title text-center">{book._name}</h6>
          <p className="description">{book._description}</p>
          <Button
            className="btn-block"
            color="primary"
            size="sm"
            onClick={routeChange}
            // onClick={openBookDetails()}
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;
