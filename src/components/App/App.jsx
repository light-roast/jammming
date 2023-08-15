import './App.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchResults from '../SearchResults/SearchResults.jsx'
import Playlist from '../Playlist/Playlist.jsx'
import { useState } from 'react'

function App() {
  const [searchResults, setSearchResults] = useState([
    {
    name: "Ya wey", 
    artist: "Daniel", 
    album: "pls kill me", 
    id: "1"
  },

    {
      name: "Ay gonorrea", 
    artist: "Daniel", 
    album: "pls kill me", 
    id: "2"
    },
    {
    name: "Kill me pls", 
    artist: "Daniel", 
    album: "pls kill me", 
    id: "3"
    }
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Playlisttrack1", 
      artist: "Daniel", 
      album: "pls kill me", 
      id: "4"
    },
  
      {
        name: "APlaylisttrack2", 
      artist: "Daniel", 
      album: "pls kill me", 
      id: "5"
      },
      {
      name: "Playlisttrack13", 
      artist: "Daniel", 
      album: "pls kill me", 
      id: "6"
      }
  ])

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

  return (
    <>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar/>
            <div className="App-playlist">
              <SearchResults searchResults={searchResults} onAdd={addTrack}/>
              <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
