import './Track.css'
import PropTypes from 'prop-types';

export default function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return <button className="Track-action" onClick={removeTrack}>-</button>
        } else  {
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }

    function addTrack() {
        props.onAdd(props.track)
    }

    function removeTrack() {
        props.onRemove(props.track)
    }

return (
    <div className="Track">
    <div className="Track-information">
        <h3>{props.name}</h3>
        <p>{props.artist} | {props.album}</p>
    </div>
    {renderAction()}
    </div>
)
}

Track.propTypes = {
    track: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    isRemoval: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
