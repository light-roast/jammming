import TrackList from '../TrackList/TrackList.jsx'
import './Playlist.css'
import PropTypes from 'prop-types'

export default function Playlist({playlistName, playlistTracks}) {
    return(
        <div className="Playlist">
            <input defaultValue={playlistName}/>
            <TrackList tracks={playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

Playlist.propTypes = {
    playlistName: PropTypes.string.isRequired,
    playlistTracks: PropTypes.array.isRequired
};