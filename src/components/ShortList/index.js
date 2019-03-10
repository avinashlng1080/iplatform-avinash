import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconStar } from '../../assets/images'

// Add or remove favorite from short list

const ShortList = ({ showShortList, favoriteList }) => {
  if (showShortList) {
    return (
      <div className="ShortListContainer">
        <div className="ShortListHeader" />
        <Table responsive size="sm">
          <thead>
            <tr>
              <th />
              <th>Artist Name</th>
            </tr>
          </thead>
          <tbody>
            {
            favoriteList.map((artist) => {
              const { artistName } = artist
              return (
                <tr key={getKey()} onClick={() => console.log(`clicked favorite row for${artistName}`)}>
                  <td><img src={iconStar} alt="Add Artist" /></td>
                  <td><span style={{ color: '#6699c3' }}>{artistName}</span></td>
                </tr>
              )
            })
        }
          </tbody>
        </Table>
      </div>
    )
  }

  return null
}

ShortList.propTypes = {
  showShortList: PropTypes.bool,
  favoriteList: PropTypes.arrayOf(PropTypes.shape({
    albumImage: PropTypes.string, // image url
    artistName: PropTypes.string,
  })),
}

ShortList.defaultProps = {
  showShortList: false,
  favoriteList: PropTypes.arrayOf(PropTypes.shape({
    albumImage: PropTypes.string, // image url
    artistName: PropTypes.string,
  })),
}

export default ShortList
