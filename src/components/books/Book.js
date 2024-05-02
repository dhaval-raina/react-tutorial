import Author from "./Author";
import Image from "./Image";
import Title from "./Title";
let count = 1;
function Book({ imgsrc, title, author, id, getBook, number }) {
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <Image src={imgsrc} title={title} />
      <Title title={title} />
      <Author author={author} />
      {/* <div>
        <button onClick={() => getBook(id)}>Click</button>
      </div> */}
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
}

export default Book;
