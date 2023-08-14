import TrackList from '../TrackList/TrackList.jsx'
import './Playlist.css'
import PropTypes from 'prop-types'

export default function Playlist({searchResults}) {
    return(
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList searchResults={searchResults}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

Playlist.propTypes = {
    searchResults: PropTypes.array.isRequired
};