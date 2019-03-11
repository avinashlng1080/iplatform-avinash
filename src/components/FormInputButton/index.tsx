import React, { FunctionComponent } from 'react'

import './Styles.css'
import { iconFind } from '../../assets/images'


type IFormInputButton = {
}

const FormInputButton: FunctionComponent<IFormInputButton> = () => (
  <button type="submit" className="FormInputButton" >
    <img alt="Submit" src={iconFind} className="iconFind" />
  </button>
)

export default FormInputButton
