import React, { useState } from 'react'
import styled from 'styled-components'
import { WrapperRange, RangeInput } from '../assets/wrappers/Resume'
import Descr from './Descr'

const Range = ({ descriptionName }) => {
  const [value, setValue] = useState(50);
  return (
    <WrapperRange>
      <Descr>{descriptionName} - {value}</Descr>
      <RangeInput
        type='range'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        step={10}
        max="100"
        min="0"
      />

    </WrapperRange>
  )
}

export default Range
