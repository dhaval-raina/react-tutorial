import React from "react";

function Author({ author }) {
  const inlineHeadingStyles = {
    color: "#1e326f",
    fontSize: "0.75rem",
    marginTop: "0.50rem",
  };
  return (
    <>
      <h4 style={inlineHeadingStyles}>{author}</h4>
    </>
  );
}

export default Author;
