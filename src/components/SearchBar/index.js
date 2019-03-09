import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import './Styles.css';

// something
const SearchBar = ({ searchBarTitle, formControlID, formPlaceHolder }) => (
  <div className="SearchBar">
    <h3>{searchBarTitle}</h3>
    <Form>
      <Form.Group controlId={formControlID}>
        <Form.Control type="text" placeholder={formPlaceHolder} />
      </Form.Group>
    </Form>
  </div>
);

SearchBar.propTypes = {
  searchBarTitle: PropTypes.string,
  formControlID: PropTypes.string,
  formPlaceHolder: PropTypes.string,
};

SearchBar.defaultProps = {
  searchBarTitle: 'Search',
  formControlID: 'formSearch',
  formPlaceHolder: '',
};

export default SearchBar;
