import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

const Description = styled.p`
transition:0.4s all;
font-weight: 200;
font-size: 16px;
cursor: pointer;
color:${(props) => props.isSecondary ? '#b0b0b0' : props.isPrimary ? '#f1c40f' : 'black'};
&:focus{
  background-color: #e4e8ed;
  border: none;
  outline: none;
  cursor: text;
}
 &:hover{
  background-color: #eff2f5;
  border: none;
  outline: none;
 }
margin:0;
`

const Descr = ({ children, className, isPrimary, isSecondary, ...attrs }) => {
  // const classes = classNames() 
  return (
    <Description
      className={className}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      isSecondary={isSecondary}
      isPrimary={isPrimary}
      {...attrs}>
      {children}
    </Description>
  )
}

Descr.propTypes = {
  onClick: propTypes.func
}
Descr.defaultProps = {
  onClick: () => { }
}


export default Descr
