import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Wrapper, { AvatarWrapper } from '../assets/wrappers/Resume'
import { BsCamera } from "react-icons/bs";

const Avatar = ({ isSquare, onClick }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile])
  return (
    <Wrapper isSquare={isSquare} onClick={onClick} >
      <input id='Avatar'
        type='file'
        value=''
        style={{ display: "none" }}
        onChange={(e) => setSelectedFile(e.target.files[0])}></input>
      <label htmlFor='Avatar'>
        {preview ? (
          <AvatarWrapper
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: 'cover',
            }}
          />
        ) : (
          <AvatarWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} > 
               <BsCamera style={{ fontSize: '40px'}} />
               </AvatarWrapper>

        )}
      </label>
    </Wrapper>
  )
}
Avatar.propTypes = {
  isSquare: propTypes.bool,
  onClick: propTypes.func
}
Avatar.defaultProps = {
  isSquare: false,
  onClick: () => { }
}
export default Avatar
