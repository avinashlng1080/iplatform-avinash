import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './Styles.css';
import { FormInputButton } from '..'

// something
const SearchBar = ({
  searchBarTitle, formControlID, formPlaceHolder, onSubmit,
}) => (
  <div className="SearchBar">
    <h3>{searchBarTitle}</h3>
    <Form inline noValidate>
      <Form.Group controlId={formControlID}>
        <Form.Control inline type="text" placeholder={formPlaceHolder} />
        <span><FormInputButton onSubmit={onSubmit} /></span>
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
