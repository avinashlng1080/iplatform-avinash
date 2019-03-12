import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

import './Styles.css';
import { FormInputButton } from '..'

type ISearchBar = {
  searchBarTitle: string,
  formPlaceHolder: string,
  onSubmit: ((event: React.FormEvent<HTMLInputElement>) => void),
}

const SearchBar: FunctionComponent<ISearchBar> = ({
  searchBarTitle, formPlaceHolder, onSubmit,
}) => (
    <div className="SearchBarContainer">
      <h3>{searchBarTitle}</h3>
      <Form noValidate onSubmit={onSubmit}>
        <Form.Group bsPrefix="SearchBarGroup">
          <Form.Control
            bsPrefix="SearchBarInput"
            type="text"
            placeholder={formPlaceHolder}
          />
          <FormInputButton />
        </Form.Group>
      </Form>
    </div>
  );

export default SearchBar;
