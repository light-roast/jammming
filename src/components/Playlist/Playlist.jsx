
import TrackList from '../TrackList/TrackList.jsx'
import PlaylistList from '../PlaylistList/PlaylistList.jsx'
import './Playlist.css'
import PropTypes from 'prop-types'

export default function Playlist({playlistName, playlistTracks, onRemove, 
  onNameChange, onSave, playlists, selectPlaylist, getPlaylists}) {
    
    
    function handleNameChange(e) {
        onNameChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
        getPlaylists();
        onNameChange('My Playlist');
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
          <PlaylistList  playlists={playlists} selectPlaylist={selectPlaylist}/>
      </div>
    )
}

Playlist.propTypes = {
    playlistName: PropTypes.string.isRequired,
    playlistTracks: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
    playlists: PropTypes.array.isRequired,
    getPlaylists: PropTypes.func.isRequired
};