import React, { FunctionComponent } from 'react'
import { Table, Button } from 'react-bootstrap'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconAdd } from '../../assets/images'

// eslint-disable-next-line react/prop-types
const getShortListButton = (...params: any[]) => {
  const [searchResults, onClickShowList] = params
  return (
    <div className="ShortListButton">
      <Button
        variant={!(searchResults && searchResults.lenght) ? 'outline-dark' : 'outline-light'}
        // disabled={searchResults && searchResults.lenght} // TODO: enable only if short list contains data
        as="button"
        onClick={onClickShowList}
      >
       Show short-list
      </Button>
    </div>

  )
}

type ISearchResult = {
  searchResultsHeadings: any[],
  searchResults: any[],
  onClickShowList: () => void
}

const SearchResult: FunctionComponent<ISearchResult> = ({
  searchResultsHeadings, searchResults, onClickShowList
}) => (
  <div className="SearchResultContainer">
    <h4>Search Results:</h4>
    <hr />
    { getShortListButton(searchResults, onClickShowList) }
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

export default SearchResult
