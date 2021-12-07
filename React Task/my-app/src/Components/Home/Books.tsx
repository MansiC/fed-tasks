import Book from "./Book";
import "./books.style.scss";
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state: any) => state.allBooks.products);
  return (
    <div className="row">
      {books.map((book: any) => (
        <div className="col-sm-3 books" key={book._id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};

export default Books;
