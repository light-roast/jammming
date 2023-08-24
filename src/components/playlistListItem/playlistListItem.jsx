import '../Track/Track.css';
import PropTypes from 'prop-types'
export default function PlaylistListItem({name, selectPlaylist, key}) {
    

return (
    <div className="Track" onClick={selectPlaylist(key)}>
    <div className="Track-information">
        <h3>{name}</h3>
    </div>
    </div>
)
}

PlaylistListItem.propTypes = {
    name: PropTypes.string.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
    key: PropTypes.any.isRequired
    
};
