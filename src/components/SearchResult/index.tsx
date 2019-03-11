import React, { FunctionComponent } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconAdd } from '../../assets/images'
import Actions from '../../redux/actions'

type ISearchResult = {
  searchResultsHeadings: string[],
  searchResults: ILastFMArtist[],
  onClickShowList: () => void
  addArtistToShortList: (artist: ILastFMArtist) => void
}

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

const getLastFMImage = (images: any[], size: any = "small") => {
  if (_.isEmpty(images)) { return { hasImage: false, imageURL: null } }
  const desiredImage = _.filter(images, { size: size })
  return { hasImage: true, imageURL: desiredImage[0]["#text"] }
}

const getSearchResults: FunctionComponent<ISearchResult> = ({ searchResultsHeadings, searchResults, addArtistToShortList, onClickShowList} ) => {
  return (
    <React.Fragment>
     { getShortListButton(searchResults, onClickShowList) } 
    < Table responsive hover >
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
              const { image, name } = artist
              const artistImage: any = getLastFMImage(image, "small")
              const { hasImage, imageURL } = artistImage
              return (
                <tr
                  key={getKey()}
                  onClick={() => {
                    addArtistToShortList(artist)
                  }
                  }
                >
                  <td>{hasImage && (<img src={imageURL} alt={`${name} cover`} className="SRAlbumImage" />)}</td>
                  <td><span style={{ color: '#6699c3' }}>{name}</span></td>
                  <td><img src={iconAdd} alt="Add Artist" /></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table >
    </React.Fragment>
  )
}

const SearchResult: FunctionComponent<ISearchResult> = ({
  searchResultsHeadings, searchResults, onClickShowList, addArtistToShortList
}) => (
    <div className="SearchResultContainer">
      <h4>Search Results:</h4>
      <hr />
      {
        _.isEmpty(searchResults) ? (<div>No results found</div>) : getSearchResults({searchResultsHeadings, searchResults, onClickShowList, addArtistToShortList})
      }
    </div>
  )


const mapDispatchToProps = (dispatch: any) => {
  return {
    addArtistToShortList: (artist: IArtist) => dispatch(Actions.ShortListActions.addToShortList(artist))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult)
