import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => {
        this.setState({ customers });
      });
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer, idx) => {
            return <li key={idx}> { customer.firstName } { customer.lastName } </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Customers;
