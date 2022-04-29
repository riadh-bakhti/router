import React from 'react';
import { Button, Form, FormControl } from "react-bootstrap";

const Rate = ({ setSearchTxt }) => {
    return (
        <div>
            <div className="myfilter">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <Button variant="outline-success" style={{ padding: "0 20px" }}>
          Search
        </Button>
      </Form>
    </div>
  );
            
            
        </div>
    );
}

export default Rate;




