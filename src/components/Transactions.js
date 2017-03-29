import React, { Component } from 'react'
import Transaction from './Transaction'


class Transactions extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
    <table>
      <tbody>
        <tr>
          <th>Posted At</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </tbody>
      {this.props.transactions.map(transaction => <Transaction transaction={transaction} /> )}
    </table>
    )
  }
}

export default Transactions
