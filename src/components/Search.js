import React from 'react'

const Search = ({searchTerm}) => {
  return (
    <div>
      <input type="text" value={searchTerm.searchTerm} placeholder={"Search your most recent transactions"} />
    </div>
  )
}

export default Search
