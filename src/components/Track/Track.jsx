import './Track.css'
import PropTypes from 'prop-types';

export default function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return <button className="TrackAction">-</button>
        } else  {
            return <button className="TrackAction">+</button>
        }
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
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
};