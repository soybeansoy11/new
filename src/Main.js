
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { Grid, Navbar, Jumbotron, Button, Alert, Panel, Accordion,Input, ButtonToolbar, Modal ,OverlayTrigger ,ListGroup ,ListGroupItem } from 'react-bootstrap';
//import * as Bootstrap from 'react-bootstrap';
//steps : install node.js and instal npm, then create react js then install bootstrap in https://reactstrap.github.io/
//https://www.codeofaninja.com/2016/07/react-crud-tutorial.html


// component that decides which main component to load: read or create/update
var Main = React.createClass({

    // initial mode is 'read' mode
    getInitialState: function(){
        return {
            currentMode: 'read',
            productId: null
        };
    },

    // used when use clicks something that changes the current mode
    changeAppMode: function(newMode, productId){
        this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    },

    // render the component based on current or selected mode
    render: function(){

        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;

        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            // case 'create':
            //     modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
            //     break;
            // case 'update':
            //     modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
            //     break;
            // case 'delete':
            //     modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
            //     break;
            // default:
            //     break;
        }

        return modeComponent;
    }
});
