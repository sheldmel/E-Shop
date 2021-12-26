import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const nav = useNavigate();
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim()) {
      nav(`/search/${search}`);
    } else {
      nav("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Products..."
        className="ml-sm-5"
      ></Form.Control>
      <Button type="submit" className="sm-5" style={{marginTop: '-1px'}}>
      <i className="fas fa-search" />
      </Button>
    </Form>
  );
};

export default SearchBox;
