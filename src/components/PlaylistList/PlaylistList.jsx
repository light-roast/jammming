import { useEffect } from 'react'
import '../TrackList/TrackList.css'
import PropTypes from 'prop-types'
import PlaylistListItem from '../playlistListItem/playlistListItem'


export default function PlaylistList({playlists, getPlaylists, selectPlaylist}) {
    
    useEffect(() => {
        getPlaylists();
    }, []);
    
    return (
        <div className="TrackList">
            <h2 id="Sub">Local playlists:</h2>
           {playlists?.map(result => {
            return <PlaylistListItem key={result.playlistId} name={result.name} selectPlaylist={selectPlaylist}/>
           })}
        </div>
    )
}

PlaylistList.propTypes = {
    playlists: PropTypes.array.isRequired,
    getPlaylists: PropTypes.func.isRequired,
    selectPlaylist: PropTypes.func.isRequired
    
};