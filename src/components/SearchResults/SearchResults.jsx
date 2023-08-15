import TrackList from '../TrackList/TrackList.jsx'
import './SearchResults.css'
import PropTypes from 'prop-types'

export default function SearchResults({searchResults, onAdd}) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false}/> 
        </div>
    )
}

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired
};