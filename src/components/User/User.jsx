import React, { Component } from 'react';
import axios from 'axios';
import './user.module.css'; 

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      min: 0,
      max: 5
    };
  }

  nextData = () => {
    this.setState(prevState => ({
      min: prevState.min + 5,
      max: prevState.max + 5
    }));
  };

  prevData = () => {
    if (this.state.min >= 5) {
      this.setState(prevState => ({
        min: prevState.min - 5,
        max: prevState.max - 5
      }));
    }
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className='container d-block m-auto mt-5'>
        <h1 className='header'>User List</h1>
        <div className='button-group mb-5'>
          <button className='btn btn-dark me-2' onClick={this.prevData}>Prev</button>
          <button className='btn btn-dark' onClick={this.nextData}>Next</button>
        </div>
        <table className='user-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              .filter(user => user.id > this.state.min && user.id <= this.state.max)
              .map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
