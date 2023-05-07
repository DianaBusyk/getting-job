import React from 'react'
import propTypes from 'prop-types'
import { AiFillPrinter } from "react-icons/ai";
import styled from 'styled-components';
const ButtonPrint = styled.button`
  background-color:#ee95c7;
  border:none;
  border-radius:var(--borderRadius);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  color: white;
  padding: 4px 6px 4px 6px;
  box-shadow: var(--shadow-2);
  transition: 0.4s all ease ;
  &:hover{
    background-color: #e57ab5;
  }
`
const Print = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ButtonPrint onClick={onClick}>
        <AiFillPrinter style={{ fontSize: '30px', verticalAlign: "middle" }} /> Роздрукувати
      </ButtonPrint>
    </div>

  )
}
Print.propTypes = {
  onClick: propTypes.func
}
Print.defaultProps = {
  onClick: () => { }
}
export default Print
