import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const SearchBarDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
`;

const Form = styled.form`
    background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <>
      <SearchBarDiv>
        {/* <form onSubmit={handleFormSubmit}>
          <input value={term} onChange={handleChange} />
        </form> */}
        <Form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        </Form>
      </SearchBarDiv>
    </>
  );
}
