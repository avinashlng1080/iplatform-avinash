import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import './Styles.css'
import { AppState } from '../../redux/reducers'
import { getKey } from '../../utils/Functions'
import { iconStar } from '../../assets/images'
import Actions from '../../redux/actions'
import { FavoriteIcon } from '..';

type StateProps = {
    releases: IMBZRelease[],
}

type DispatchProps = {
    addReleaseToFavoriteList: (release: IMBZRelease) => void
}

type OwnProps = {
    releaseTableHeadings: string[],
}

type MBZReleaseResultsProps = StateProps & DispatchProps & OwnProps

const MBZReleaseResults: FunctionComponent<MBZReleaseResultsProps> = ({ releases, releaseTableHeadings, addReleaseToFavoriteList }) => {
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
                        releases.map((release) => {
                            const { year, title, releaseLabel, numberOfTracks } = release
                            return (
                                <tr
                                    key={getKey()}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        // process artist first 
                                        addReleaseToFavoriteList(release)
                                    }}
                                >
                                    <td><FavoriteIcon favType='release' favoriteItem={release} flow='mbz' /></td>
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
        addReleaseToFavoriteList: (release: IMBZRelease) => dispatch(Actions.FavoriteListActions.addReleaseToFavoriteList(release))
    }
}

const MBZReleaseResultsComponent: React.FunctionComponent<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(MBZReleaseResults)

export default MBZReleaseResultsComponent