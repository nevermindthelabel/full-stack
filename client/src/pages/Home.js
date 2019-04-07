import React, { Component } from 'react';
import API from '../utils/API';

export default class Home extends Component {
  state = {

  }

  componentDidMount() {
    console.log(API.index())
  }

  render() {

    return(
      <div className="container">
        <h1>>Home Page</h1>
      </div>
    )
  }
}