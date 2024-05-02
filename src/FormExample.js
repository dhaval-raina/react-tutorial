const FormExample = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };
  const handleButtonClick = (e) => {
    console.log("button clicked");
  };
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <section>
      <h2>Typical Form</h2>
      <form method="post" onSubmit={handleFormSubmit}>
        <input
          type="search"
          name="serach"
          id="serach"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        />
        <button type="button" onClick={handleButtonClick}>
          Click Me
        </button>
        <button type="submit">Sumbit</button>
      </form>
    </section>
  );
};

export default FormExample;
