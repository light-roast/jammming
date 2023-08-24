
import { useEffect } from 'react'
import '../TrackList/TrackList.css'


export default function PlaylistList({playlists, getPlaylists}) {
    
    useEffect(() => {
        getPlaylists();
    }, []);
    
    return (
        <div className="TrackList">
            <h1>Your playlists</h1>
           {playlists?.map(result => {
            return <div key={result.id}>
                {result.name}
                </div>
           })}
        </div>
    )
}