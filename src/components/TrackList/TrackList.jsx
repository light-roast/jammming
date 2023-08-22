import './TrackList.css'
import PropTypes from 'prop-types';
import Track from '../Track/Track'


export default function TrackList({tracks, onAdd, onRemove, isRemoval}) {
    return (
        <div className="TrackList">
           {tracks?.map(result => {
            return <Track track={result} 
                            name={result.name} 
                            artist={result.artist} 
                            album={result.album} 
                            key={result.id} 
                            onAdd={onAdd}
                            onRemove={onRemove} 
                            isRemoval={isRemoval}
                            />
           })}
        </div>
    )
}

TrackList.propTypes = {
   tracks: PropTypes.array.isRequired,
   onAdd: PropTypes.func,
   onRemove: PropTypes.func,
   isRemoval: PropTypes.bool.isRequired
};