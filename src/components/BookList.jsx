import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const books = this.props.books;
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {books.map((book) => (
            <div className="col mb-3" key={book.asin}>
              <SingleBook book={book} />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
