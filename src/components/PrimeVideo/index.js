// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(
    eachValue => eachValue.categoryId === 'ACTION',
  )
  const comedyList = moviesList.filter(
    eachValue => eachValue.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner"
      />
      <div className="movie-container">
        <h1 className="category">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="category">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
