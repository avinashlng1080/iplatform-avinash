import React from 'react'
import PropTypes from 'prop-types'

import './Styles.css'
import { iconFind } from '../../assets/images'

const FormInputButton = ({ onSubmit }) => (
  <button type="button" className="FormInputButton" onClick={onSubmit}>
    <img alt="Submit" src={iconFind} className="iconFind" />
  </button>
)

FormInputButton.propTypes = {
  onSubmit: PropTypes.func
}

FormInputButton.defaultProps = {
  onSubmit: () => {}
}

export default FormInputButton
