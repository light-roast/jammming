import '../Track/Track.css';
import PropTypes from 'prop-types'
export default function playlistListItem({name}) {
    

return (
    <div className="Track">
    <div className="Track-information">
        <h3>{name}</h3>
    </div>
    </div>
)
}

playlistListItem.propTypes = {
    name: PropTypes.string.isRequired,
    
};
