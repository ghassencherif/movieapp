import React from 'react'

function SearchBox(props) {
    return (
        <div>
            <input onChange={props.handleInput} className="search" type="text" />
        </div>
    )
}

export default SearchBox
