import React, { FunctionComponent } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconAdd } from '../../assets/images'
import Actions  from '../../redux/actions'

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
  searchResultsHeadings: string[],
  searchResults: IArtist[],
  onClickShowList: () => void
  addArtistToShortList: (artist: IArtist) => void
}

const SearchResult: FunctionComponent<ISearchResult> = ({
  searchResultsHeadings, searchResults, onClickShowList, addArtistToShortList
}) => (
    <div className="SearchResultContainer">
      <h4>Search Results:</h4>
      <hr />
      {getShortListButton(searchResults, onClickShowList)}
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
                <tr
                  key={getKey()}
                  onClick={() => {
                    console.log(`clicked for row ${artistName}`)
                    addArtistToShortList(artist)
                  }
                  }
                >
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    addArtistToShortList: (artist: IArtist) => dispatch(Actions.ShortListActions.addToShortList(artist))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult)
