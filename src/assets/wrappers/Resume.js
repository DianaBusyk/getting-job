import styled from "styled-components";

const Wrapper = styled.div`
  width:12rem;
  height:12rem;
  transition: 0.4s all ease ;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #f0a8d0;
  &:hover{
    background-color: #e57ab5;
  }
`
export const AvatarWrapper = styled.div`
  width:12rem;
  height:12rem;
  background-position: center;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  cursor: pointer;
`
export const WrapperRange = styled.div`

`
export const RangeInput = styled.input`
  /* width: 97%; */
  height: 6px;
  margin: 0 0.4rem 0 0;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background: #ddd;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: #f1c40f;
    box-shadow: -100vw 0 0 100vw #f1c40f;
    border: 1px solid #f1c40f;
 
  }
  &:focus{
    outline:none;
  }
  &:hover::-webkit-slider-thumb{
      background: #d5ad0d;
    border: 1px solid #d5ad0d;
    }
`
export const WrapperCont = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  border:0.1px solid grey;
  font-family: "Gill Sans", sans-serif !important;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
  background-color: #fff;
  @media print{
    border:none;
    box-shadow: none;
    padding: 0rem 2rem;
  }
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

export const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
  place-content:4rem;
`

export const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
export const AddSkillsBtn = styled.button`
 .titleWrapper:hover & {
  display:inline;
 }
 display:none;
  margin-left: 0.5rem;
  vertical-align: sub;
  border:none;
  padding: 0;
  transition: 0.4s all ease ;
  font-size: 28px;
  background: transparent;
  color:#f1c40f;
  cursor: pointer;
  /* border-radius:var(--borderRadius); */
  &:hover{
    color:#d5ad0d;
  }
`
export default Wrapper;