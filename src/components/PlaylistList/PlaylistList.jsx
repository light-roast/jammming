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
            <h1>Your playlists</h1>
           {playlists?.map(result => {
            return <TracklistListItem key={result.playlistId} name={result.name}/>
           })}
        </div>
    )
}