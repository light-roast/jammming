import TrackList from '../TrackList/TrackList.jsx'
import './SearchResults.css'

export default function SearchResults({searchResults}) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList searchResults={searchResults} />
        </div>
    )
}