import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Sport extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
          <div className="container">
            <img src= {this.props.Images}/>
            <h1>{this.props.headingText}</h1>
            <p>{this.props.paragraphText}</p>
            <h2>{this.props.sportName}</h2>
          </div>
        );
      }
    }
    export default Sport;