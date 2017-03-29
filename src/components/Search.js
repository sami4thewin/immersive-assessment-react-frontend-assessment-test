

import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onChange} value={this.props.searchTerm} placeholder={"Search your most recent transactions"} />
      </div>
    )
  }

}

export default Search
