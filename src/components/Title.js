import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { AddSkillsBtn } from '../assets/wrappers/Resume'
import styled, { css } from 'styled-components'
const TitleComponents = styled.p`
  display: ${(props) => props.isShownBtn ? 'inline' : 'block'};
  transition:0.4s all;
  font-weight: 600;

  margin-bottom: 5px;
  text-transform: ${(props) => props.isUppercase ? 'uppercase' : 'none'};
  &.title-1{
  font-size: 32px;
  }
  &.title-2{
  font-size: 27px;
  }
  &.title-3{
  font-size: 20px;
  }
  &:focus{
    cursor: text;
    border:none;
    outline: none;
  }  &:hover{
    border:none;
    outline: none;

    /* background-color: #eff2f5; */
  }
`
const Wrapper = styled.div`
  margin-top: 3.6rem;
  cursor: pointer;
  transition: 0.4s all ease ;
  &:hover{
    border:none;
    outline: none;
    background-color: #eff2f5;
    &button{
      display:block;
    }
  }
  `
const Title = ({ children,onClick, size, isShownBtn=false, className, isUppercase, ...attrs }) => {
  // const classes = classNames(`title-${size}`)
  return (
    <Wrapper className="titleWrapper">
      <TitleComponents
      isShownBtn={isShownBtn}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        className={`title-${size}`}
        isUppercase={isUppercase}
        {...attrs} >
        {children}
      </TitleComponents>
      {isShownBtn && <AddSkillsBtn onClick={onClick} >+</AddSkillsBtn>}
    </Wrapper>
  )
}
// Title.propTypes = {
//   onClick: propTypes.func
// }
// Title.defaultProps = {
//   onClick: () => { }
// }
export default Title 
