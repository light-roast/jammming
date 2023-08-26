import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults from '../SearchResults/SearchResults.jsx'
import Playlist from '../Playlist/Playlist.jsx'
import {useEffect, useState} from 'react'
import Spotify from '../../util/Spotify'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
    getPlaylists();
  }, [])

  function addTrack(track) {
    if (!(playlistTracks.some(obj => obj.id === track.id))) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  function removeTrack(track) {
    if (playlistTracks.some(obj => obj.id === track.id)) {
      const filterPlaylist = playlistTracks.filter(currentTrack => 
        currentTrack.id !== track.id)
      setPlaylistTracks(filterPlaylist);
    }
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const tracksUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, tracksUris, playlistId).then(() => {
      setPlaylistTracks([]);
      updatePlaylistName('My Playlist'); 
      setPlaylistId(null);   
      });
      
  }

  function search(term) {
    Spotify.search(term).then(results => {
      console.log(results);
      setSearchResults(results);
    });
  }

  function getPlaylists() {
    Spotify.getUserPlaylists().then(results => {
      setUserPlaylists(results);
    });
  }

  function selectPlaylist(id) {
    Spotify.getPlaylist(id).then(results => {
      setPlaylistName(results.playlistName);
      setPlaylistTracks(results.tracks);
      setPlaylistId(id);
    })
  }

  return (
    <>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar
              onSearch={search}
            />
            <div className="App-playlist">
              <SearchResults searchResults={searchResults} 
                              onAdd={addTrack}
                              />
              <Playlist onSave={savePlaylist}
                        onNameChange={updatePlaylistName} 
                        playlistName={playlistName} 
                        playlistTracks={playlistTracks} 
                        onRemove={removeTrack}
                        getPlaylists={getPlaylists}
                        playlists={userPlaylists}
                        selectPlaylist={selectPlaylist}
                        
                        />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
