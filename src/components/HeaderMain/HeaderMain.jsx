import React from 'react'
import { createImageFromText } from './../../api/OpenAI_UserAPI';


function HeaderMain() {
  const handleSubmit = ()=>{
      createImageFromText()
      .then((imageDescription) => {
        console.log(imageDescription)
      })
      .catch((error) => {
        console.error('Lỗi: ', error);
      });
  }
  return (
    <div>HeaderMain
    <button onClick={handleSubmit}>Generate</button>
    </div>
  )
}

export default HeaderMain