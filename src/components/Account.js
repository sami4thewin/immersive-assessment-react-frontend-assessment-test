import React, { Component } from 'react'
import Transactions from './Transactions'
import Search from './Search'
const { fetch } = require('whatwg-fetch');


const INITIAL_STATE = {
  transactions: [{"id":1,"posted_at":"2017-03-28T07:09:02.785Z","description":"StubHub Concert Tickets: Beyonce @ Barclay's Center","category":"Entertainment","amount":-58900,"created_at":"2017-03-29T07:09:02.801Z","updated_at":"2017-03-29T07:09:02.801Z"},{"id":2,"posted_at":"2017-03-28T07:09:02.809Z","description":"Paycheck from Bob's Burgers","category":"Income","amount":100000,"created_at":"2017-03-29T07:09:02.810Z","updated_at":"2017-03-29T07:09:02.810Z"},{"id":3,"posted_at":"2017-03-28T07:09:02.811Z","description":"South by Southwest Quinoa Bowl at Fresh \u0026 Co","category":"Food","amount":-1050,"created_at":"2017-03-29T07:09:02.811Z","updated_at":"2017-03-29T07:09:02.811Z"},{"id":4,"posted_at":"2017-03-27T07:09:02.813Z","description":"South by Southwest Quinoa Bowl at Fresh \u0026 Co","category":"Food","amount":-1050,"created_at":"2017-03-29T07:09:02.813Z","updated_at":"2017-03-29T07:09:02.813Z"},{"id":5,"posted_at":"2017-03-27T07:09:02.814Z","description":"Netflix Monthly Subscription","category":"Entertainment","amount":-899,"created_at":"2017-03-29T07:09:02.814Z","updated_at":"2017-03-29T07:09:02.814Z"},{"id":6,"posted_at":"2017-03-25T07:09:02.816Z","description":"Dope Jean Jacket, Gap co.","category":"Fashion","amount":-6900,"created_at":"2017-03-29T07:09:02.816Z","updated_at":"2017-03-29T07:09:02.816Z"},{"id":7,"posted_at":"2017-03-25T07:09:02.817Z","description":"Sunglasses, Urban Outfitters","category":"Fashion","amount":-2499,"created_at":"2017-03-29T07:09:02.817Z","updated_at":"2017-03-29T07:09:02.817Z"},{"id":8,"posted_at":"2017-03-24T07:09:02.818Z","description":"Venmo, Alice Pays you for Burrito","category":"Food","amount":875,"created_at":"2017-03-29T07:09:02.819Z","updated_at":"2017-03-29T07:09:02.819Z"},{"id":9,"posted_at":"2017-03-24T07:09:02.820Z","description":"Chipotle","category":"Food","amount":-1750,"created_at":"2017-03-29T07:09:02.820Z","updated_at":"2017-03-29T07:09:02.820Z"},{"id":10,"posted_at":"2017-03-22T07:09:02.821Z","description":"Birthday Check from Grandma","category":"Gift","amount":5000,"created_at":"2017-03-29T07:09:02.822Z","updated_at":"2017-03-29T07:09:02.822Z"},{"id":11,"posted_at":"2017-03-22T07:09:02.823Z","description":"ATM Withdrawal","category":"ATM","amount":-6000,"created_at":"2017-03-29T07:09:02.823Z","updated_at":"2017-03-29T07:09:02.823Z"},{"id":12,"posted_at":"2017-03-22T07:09:02.824Z","description":"ATM Withdrawal Fee","category":"ATM","amount":-275,"created_at":"2017-03-29T07:09:02.825Z","updated_at":"2017-03-29T07:09:02.825Z"},{"id":13,"posted_at":"2017-03-22T07:09:02.826Z","description":"Lyft Ride","category":"Transportation","amount":-1325,"created_at":"2017-03-29T07:09:02.826Z","updated_at":"2017-03-29T07:09:02.826Z"},{"id":14,"posted_at":"2017-03-21T07:09:02.827Z","description":"Paycheck from Bob's Burgers","category":"Income","amount":100000,"created_at":"2017-03-29T07:09:02.828Z","updated_at":"2017-03-29T07:09:02.828Z"},{"id":15,"posted_at":"2017-03-21T07:09:02.829Z","description":"Tickets, Flatiron Multiplex Cinemas","category":"Entertainment","amount":-2400,"created_at":"2017-03-29T07:09:02.829Z","updated_at":"2017-03-29T07:09:02.829Z"},{"id":16,"posted_at":"2017-03-21T07:09:02.830Z","description":"Popcorn, soda, Flatiron Multiplex Cinemas","category":"Food","amount":-900,"created_at":"2017-03-29T07:09:02.831Z","updated_at":"2017-03-29T07:09:02.831Z"},{"id":17,"posted_at":"2017-03-19T07:09:02.832Z","description":"MTA Vending Machine: MetroCard","category":"Transportation","amount":-11650,"created_at":"2017-03-29T07:09:02.833Z","updated_at":"2017-03-29T07:09:02.833Z"},{"id":18,"posted_at":"2017-03-19T07:09:02.834Z","description":"Venmo, Pay Roomate for Rent","category":"Housing","amount":-97500,"created_at":"2017-03-29T07:09:02.834Z","updated_at":"2017-03-29T07:09:02.834Z"},{"id":19,"posted_at":"2017-03-19T07:09:02.835Z","description":"Student Loan Automated Payment","category":"Misery","amount":-25000,"created_at":"2017-03-29T07:09:02.836Z","updated_at":"2017-03-29T07:09:02.836Z"}],
  searchTerm: ''
}


// The data you retrieve from the Rails API will be structured as follows:
// const data = [
//   {
//     id: 1,
//     posted_at: "2017-02-28 11:00:00",
//     description: "Leather Pants, Gap co.",
//     category: "Fashion",
//     amount: -20000
//   },
//   {
//     id: 2,
//     posted_at: "2017-02-29 10:30:00",
//     description: "Paycheck from Bob's Burgers",
//     category: "Income",
//     amount: 100000
//   }
// ]
// You can use this dummy data to get the app up and running if you are
// unable to make the API call

class Account extends Component {

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.onChange = this.onChange.bind(this);

  }

  // componentWillMount() {
  //  fetch(`https://http://localhost:3001/transactions`)
  //    .then((res => this.setState({ transactions: res, searchTerm: this.state.searchTerm })))
  // }

  onChange(event) {
    //... your code here
    this.setState({
      transactions: INITIAL_STATE.transactions.filter(i => i.description.toLowerCase().includes(event.target.value) || i.category.toLowerCase().includes(event.target.value)),
      searchTerm: event.target.value
    })
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} onChange={this.onChange} />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default Account
