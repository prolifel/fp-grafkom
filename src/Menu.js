import React from 'react';
import { useEffect, useState } from "react";
import ReactDom from 'react-dom';
import logo from './images/corona.png'
import "./Menu.css";
import {Modal} from 'react-bootstrap';
// import "./assets/bootstrap/css/bootstrap.min.css";
// import "./assets/theme/css/style.css";
// import "./assets/mobirise/css/mbr-additional.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


// TODO: Buat menu cokkkkk!

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }

    increment(){
        this.setState({
            number: this.state.number+1
        })
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    //render biasa
    render(){

      
        return(           
            <div>
                <div class = "container-fluid mt-4">
                    <div class = "row align-items-center">
                        <div class="col-7 px-2 mx-0">
                            <img src={logo} class="float-start" >
                            </img>
                        </div>
                        <div class = "col px-5">
                            <div class = "row">
                                    <h1 class = "mbr-section-title mbr-fonts-style mb-3 display-2"><strong>COVID FIGHTER</strong></h1>
                            </div>
                            {/* <div class = "row">
                                <div class = "col-4">
                                <Link to="/Game">
                                <Button  variant="warning" className="" size="lg">
                                    {this.props.title}
                                </Button>
                                </Link>
                                </div>

                                <div class = "col">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Launch
                                </button>
                                </div>
                            </div> */}
                            <div class="mbr-section-btn mt-1 haha">
                                {/* <a class="btn btn-warning display-4"> */}
                                <Link to="/Game">
                                <Button  class="btn btn-warning display-4" variant="warning" size= "lg" className="" >
                                    {this.props.title}
                                </Button>
                                </Link>
                                {/* </a> */}
                                
                            {/* <button type="button" class="btn btn-primary-outline display-4 how-to" size="lg" data-bs-toggle="modal" data-bs-target="#exampleModal" > */}
                                {/* How To Play? */}
                            {/* </button> */}
                            
                            <div
                            className="btn"
                            // style={{ height: "100vh" }}
                            >
                            <a className = "btn btn-primary-outline display-4 how-to" onClick={this.openModal}>
                                How To Play?
                            </a>


                            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                            <Modal.Header>
                                <Modal.Title className = "my-modal">Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className = "my-modal">
                                dawdasdwad
                            </Modal.Body>
                            <Modal.Footer className = "my-modal">
                                <Button variant="secondary" onClick={this.closeModal}>
                                Close
                                </Button>
                            </Modal.Footer>
                            </Modal>
                            </div>
                            </div>

                            

                            
                        </div>
                    </div>
                </div>
                

                
                
                {/* nope */}
                    {/* <div class = "tombol"> */}
                        {/* nope */}

                        {/* <Button variant="secondary" onClick={ ()=>this.increment() }> */}
                            {/* {this.state.number} */}
                        {/* </Button> */}
                    {/* </div> */}
                    
               

                
            </div>


        )
    }

    //react dom

}

export default Menu;