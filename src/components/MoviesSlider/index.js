// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachValue => (
          <MovieItem key={eachValue.id} movieItem={eachValue} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
