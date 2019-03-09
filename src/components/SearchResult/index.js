import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

import './Styles.css'
import { getKey } from '../../utils/Functions'

const SearchResult = ({ searchResultsHeadings, searchResults }) => (
  <div className="SearchResultContainer">
    <h4>Search Results</h4>
    <Table responsive>
      <thead>
        <tr>
          {
            searchResultsHeadings.map(heading => (<th key={getKey()}>{heading}</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
            searchResults.map((artist) => {
              const { albumImage, artistName } = artist
              return (
                <tr key={getKey()}>
                  <td><img src={albumImage} alt={`${artistName} cover`} className="SRAlbumImage" /></td>
                  <td>{artistName}</td>
                  <td>Add Favorite button</td>
                </tr>
              )
            })
          }
      </tbody>
    </Table>
  </div>
)

SearchResult.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    albumImage: PropTypes.string, // image url
    artistName: PropTypes.string,
  })),
  searchResultsHeadings: PropTypes.arrayOf(PropTypes.string)
}

SearchResult.defaultProps = {
  searchResults: [],
  searchResultsHeadings: []
}

export default SearchResult
