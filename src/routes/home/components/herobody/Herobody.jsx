import React from 'react'
import FilmList from '../../../../components/FilmList'
import './HerobodyStyles.css'

const Herobody = () => {
    return (
      <div className="herobody">
        <div className="title-h1">
          <h1>Films</h1>
        </div>
        <div className="filmList-container">
          <FilmList/>
        </div>
      </div>
    )
}

export default Herobody
