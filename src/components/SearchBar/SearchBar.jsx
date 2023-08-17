import { useState } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types'


export default function SearchBar({onSearch}) {
    const [term, setTerm] = useState('');
    function search() {
        onSearch(term);
    }
    function handleTermSearch(e) {
        setTerm(e.target.value)
    }
    return (
        <div className="SearchBar">
            <input onChange={handleTermSearch} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
    
};