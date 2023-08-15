import TrackList from '../TrackList/TrackList.jsx'
import './Playlist.css'
import PropTypes from 'prop-types'

export default function Playlist({playlistName, playlistTracks, onRemove, onNameChange}) {
    function handleNameChange(e) {
        onNameChange(e.target.value);
    }
    return(
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={playlistName}/>
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

Playlist.propTypes = {
    playlistName: PropTypes.string.isRequired,
    playlistTracks: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired
};