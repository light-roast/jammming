import TrackList from '../TrackList/TrackList.jsx'

export default function Playlist() {
    return(
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}