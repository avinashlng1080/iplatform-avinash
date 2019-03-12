import React, { FunctionComponent } from 'react'
import { Table } from 'react-bootstrap'

import './Styles.css'
import { getKey } from '../../utils/Functions'
import { iconStar, iconClose } from '../../assets/images'

// Add or remove favorite from short list
type IShortList = { 
  showShortList: boolean ,
  favoriteList: ILastFMArtist[],
  onCloseShortList: () => void
}

const ShortList: FunctionComponent<IShortList> = ({ showShortList, favoriteList, onCloseShortList }) => {
  if (showShortList) {
    return (
      <div className="ShortListContainer">
        <div className="ShortListHeader">
          <span>
            My short list.
          </span>
          <button type="button" className="CloseShortListBtn" onClick={() => onCloseShortList()}>
            <img src={iconClose} alt="Close short list" />
          </button>
        </div>
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
              const { name } = artist
              return (
                <tr key={getKey()} onClick={() => console.log(`clicked favorite row for${name}`)}>
                  <td><img src={iconStar} alt="Add Artist" /></td>
                  <td><span style={{ color: '#6699c3' }}>{name}</span></td>
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

export default ShortList
