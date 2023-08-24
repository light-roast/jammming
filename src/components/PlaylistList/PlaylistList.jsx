import TracklistListItem from '../playlistListItem/playlistListItem'
import { useEffect } from 'react'
import '../TrackList/TrackList.css'
import PropTypes from 'prop-types'


export default function PlaylistList({playlists, getPlaylists}) {
    
    useEffect(() => {
        getPlaylists();
    }, []);
    
    return (
        <div className="TrackList">
            <h2 id="Sub">Local playlists:</h2>
           {playlists?.map(result => {
            return <TracklistListItem key={result.playlistId} name={result.name}/>
           })}
        </div>
    )
}

PlaylistList.propTypes = {
    playlists: PropTypes.array.isRequired,
    getPlaylists: PropTypes.func.isRequired
    
};