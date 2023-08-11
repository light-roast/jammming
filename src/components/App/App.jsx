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

  return (
    <>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar/>
            <div className="App-playlist">
              <SearchResults searchResults={searchResults}/>
              <Playlist searchResults={searchResults}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
