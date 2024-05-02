import FormExample from "../../FormExample";
import Book from "./Book";
import { books } from "./books";
function Booklist() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h2> Best seller books</h2>
      <section className="booklist">
        {/* <Form Example /> */}
        {books &&
          books.map((book, index) => {
            //const { title, author, imgsrc } = book;
            return (
              <Book {...book} key={book.id} getBook={getBook} number={index} />
            );
          })}
      </section>
    </>
  );
}

export default Booklist;
