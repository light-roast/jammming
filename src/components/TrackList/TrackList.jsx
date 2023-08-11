import './TrackList.css'
import PropTypes from 'prop-types';
import Track from '../Track/Track'


export default function TrackList({searchResults}) {
    return (
        <div className="TrackList">
           {searchResults?.map(result => {
            return <Track name={result.name} artist={result.artist} album={result.album} key={result.id} />
           })}
        </div>
    )
}

TrackList.propTypes = {
    searchResults: PropTypes.array.isRequired
};