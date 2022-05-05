import React from 'react'
import FilmList from '../../../../components/FilmList'
import './HerobodyHomeStyles.css'

const Herobody = () => {
    return (
      <div className="herobody">
        <div className="logo">
        </div>
        <div className="filmList-container">
          <FilmList/>
        </div>
      </div>
    )
}

export default Herobody
