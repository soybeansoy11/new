import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { Grid, Navbar, Jumbotron, Button, Alert, Panel, Accordion,Input, ButtonToolbar, Modal ,OverlayTrigger ,ListGroup ,ListGroupItem } from 'react-bootstrap';
//import * as Bootstrap from 'react-bootstrap';
//steps : install node.js and instal npm, then create react js then install bootstrap in https://reactstrap.github.io/
//https://www.codeofaninja.com/2016/07/react-crud-tutorial.html

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default App;
