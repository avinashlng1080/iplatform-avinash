import React, { FunctionComponent } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'lodash'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconAdd } from '../../assets/images'
import Actions from '../../redux/actions'
import { AppState } from '../../redux/reducers';

type ISearchResult = {
  searchResultsHeadings: string[],
  searchResults: ILastFMArtist[],
  onClickShowList: () => void
  addArtistToShortList: (artist: ILastFMArtist) => void,
  noArtistMatches?: boolean
}

const getShortListButton = (...params: any[]) => {
  const [searchResults, onClickShowList] = params
  return (
    <div className="ShortListButton">
      <Button
        variant={!(searchResults && searchResults.lenght) ? 'outline-dark' : 'outline-light'}
        disabled={_.isEmpty(searchResults)}
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

const noArtistMatchesMessage = (noArtistMatches?: boolean) => {
  return noArtistMatches ? <h4 style={{ margin: '40px 0 0 40px' }}>No result found </h4> : <h4 />
}

const SearchResult: FunctionComponent<ISearchResult> = ({
  searchResultsHeadings, searchResults, onClickShowList, addArtistToShortList, noArtistMatches
}) => !noArtistMatches && !_.isEmpty(searchResults) ?
    (<div className="SearchResultContainer" >
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
          {
            searchResults.map((artist) => {
              const { image, name } = artist
              const artistImage: any = getLastFMImage(image, "small")
              const { hasImage, imageURL } = artistImage
              return (
                <tr
                  key={getKey()}
                >
                  <td>{hasImage && (<img src={imageURL} alt={`${name} cover`} className="SRAlbumImage" />)}</td>
                  <td onClick={() => addArtistToShortList(artist)}>
                    <span style={{ color: '#6699c3', cursor: 'pointer' }}>{name}</span>
                  </td>
                  <td><img src={iconAdd} alt="Add Artist" /></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div >) : noArtistMatchesMessage(noArtistMatches)


const mapStateToProps = (state: AppState) => {
  return {
    noArtistMatches: state.lastFM.noArtistMatches
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addArtistToShortList: (artist: ILastFMArtist) => dispatch(Actions.ShortListActions.addToShortList(artist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
