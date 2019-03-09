import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './Styles.css';
import { FormInputButton } from '..'

// something
const SearchBar = ({
  searchBarTitle, formControlID, formPlaceHolder, onSubmit,
}) => (
  <div className="SearchBarContainer">
    <h3>{searchBarTitle}</h3>
    <Form noValidate>
      <Form.Group controlId={formControlID} bsPrefix="SearchBarGroup">
        <Form.Control
          bsPrefix="SearchBarInput"
          type="text"
          placeholder={formPlaceHolder}
        />
        <FormInputButton onSubmit={onSubmit} />
      </Form.Group>
    </Form>
  </div>
);

SearchBar.propTypes = {
  searchBarTitle: PropTypes.string,
  formControlID: PropTypes.string,
  formPlaceHolder: PropTypes.string,
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  searchBarTitle: 'Search',
  formControlID: 'formSearch',
  formPlaceHolder: '',
  onSubmit: () => {},
};

export default SearchBar;
