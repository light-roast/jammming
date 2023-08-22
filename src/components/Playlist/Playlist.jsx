
import TrackList from '../TrackList/TrackList.jsx'
import './Playlist.css'
import PropTypes from 'prop-types'

export default function Playlist({playlistName, playlistTracks, onRemove, onNameChange, onSave}) {
    
    
    function handleNameChange(e) {
        onNameChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameChange('My Playlist');
        onSave();
      };
    
    return(
        <div className="Playlist">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={playlistName}
            onChange={handleNameChange}
          />
          <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
          <button id="Playlist-save" type="submit">SAVE TO SPOTIFY</button>
        </form>
      </div>
    )
}

Playlist.propTypes = {
    playlistName: PropTypes.string.isRequired,
    playlistTracks: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};