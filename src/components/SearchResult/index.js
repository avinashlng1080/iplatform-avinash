import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconAdd } from '../../assets/images'


const getShortListButton = ({ searchResults }) => (
  <div className="ShortListButton">
    <Button
      variant={!(searchResults && searchResults.lenght) ? 'outline-dark' : 'outline-light'}
      disabled={searchResults && searchResults.lenght}
      onClick={() => console.log('clicked on show short list')}
    >
       Show short-list
    </Button>
  </div>

)

const SearchResult = ({ searchResultsHeadings, searchResults, showShortList }) => (
  <div className="SearchResultContainer">
    <h4>Search Results:</h4>
    <hr />
    { showShortList && getShortListButton({ searchResults })}
    <Table responsive hover>
      <thead>
        <tr>
          {
            searchResultsHeadings.map(heading => (<th key={getKey()}>{heading}</th>))
          }
        </tr>
      </thead>
      <tbody>
        { // TODO: Create a RowMaker Component
            searchResults.map((artist) => {
              const { albumImage, artistName } = artist
              return (
                <tr key={getKey()} onClick={() => console.log(`clicked for row ${artistName}`)}>
                  <td><img src={albumImage} alt={`${artistName} cover`} className="SRAlbumImage" /></td>
                  <td><span style={{ color: '#6699c3' }}>{artistName}</span></td>
                  <td><img src={iconAdd} alt="Add Artist" /></td>
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
  searchResultsHeadings: PropTypes.arrayOf(PropTypes.string),
  showShortList: PropTypes.bool
}

SearchResult.defaultProps = {
  searchResults: [],
  searchResultsHeadings: [],
  showShortList: true
}

export default SearchResult
