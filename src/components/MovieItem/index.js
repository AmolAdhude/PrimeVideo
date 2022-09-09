// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl, categoryId} = movieItem

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" key={categoryId} />}
      >
        {close => (
          <>
            <div className="close-container">
              <IoMdClose
                type="button"
                className="close-icon"
                onClick={() => close()}
                testid="closeButton"
              />
            </div>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls="true" />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
