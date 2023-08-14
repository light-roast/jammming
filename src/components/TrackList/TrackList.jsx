import './TrackList.css'
import PropTypes from 'prop-types';
import Track from '../Track/Track'


export default function TrackList({tracks}) {
    return (
        <div className="TrackList">
           {tracks?.map(result => {
            return <Track name={result.name} artist={result.artist} album={result.album} key={result.id} />
           })}
        </div>
    )
}

TrackList.propTypes = {
   tracks: PropTypes.array.isRequired
};