import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import './Styles.css'
import { AppState } from '../../redux/reducers'
import { getKey } from '../../utils/Functions'
import { iconStar } from '../../assets/images'
import Actions from '../../redux/actions'

type MBZReleaseResultsProps = {
    releases: IMBZRelease[],
    releaseTableHeadings: string[]
}

const MBZReleaseResults: FunctionComponent<MBZReleaseResultsProps> = ({ releases, releaseTableHeadings }) => {
    return (
        <div className="MBZReleaseResults">
            <Table responsive hover>
                <thead>
                    <tr>
                        {
                            releaseTableHeadings.map((heading: string) => (<th key={getKey()}>{heading}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        releases.map(({ year, title, releaseLabel, numberOfTracks, artistCredit }) => {
                            return (
                                <tr
                                    key={getKey()}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        // process artist first 
                                        // addArtistToShortList(artist)
                                    }}
                                >
                                    <td><img src={iconStar} alt="Favorite Release" /></td>
                                    <td>{year}</td>
                                    <td>{title}</td>
                                    <td>{releaseLabel}</td>
                                    <td>{numberOfTracks}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        releases: state.musicBrainz.mbzReleases,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addArtistToShortList: (artist: ILastFMArtist) => dispatch(Actions.ShortListActions.addToShortList(artist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MBZReleaseResults)