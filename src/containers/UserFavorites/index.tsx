import React, { Component } from 'react'

import './Styles.css'

type IUserFavorites = {}
type UserFavoritesState = {}

class UserFavorites extends Component<IUserFavorites, UserFavoritesState> {
  constructor(props: IUserFavorites) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // to protect against ESLINT complaints -> remove if not necessary
  }

  render() {
    return (
      <div className="UserFavorites">UserFavorites</div>
    )
  }
}

export default UserFavorites
