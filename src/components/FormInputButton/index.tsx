import React, { FunctionComponent } from 'react'

import './Styles.css'
import { iconFind } from '../../assets/images'


type IFormInputButton = {
  onSubmit: (() => void)
}

const FormInputButton: FunctionComponent<IFormInputButton> = ({ onSubmit }) => (
  <button type="button" className="FormInputButton" onClick={() => onSubmit()}>
    <img alt="Submit" src={iconFind} className="iconFind" />
  </button>
)

export default FormInputButton
