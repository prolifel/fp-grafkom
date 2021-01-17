import React from 'react';
import ReactDom from 'react-dom';
import "./Menu.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";
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


    //render biasa
    render(){
        return(           
            <div>
                <body>
                <section class="header2 cid-smm4oJkHpn mbr-fullscreen mbr-parallax-background" id="header2-p">
                <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);"></div>
                </section>
                </body>

                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-12 col-lg-4">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>COVID FIGHTER</strong></h1>
                            
                            
                            <div class="mbr-section-btn mt-3"><a class="btn btn-warning display-4" href="https://mobiri.se">Play Game!</a>
                                <a class="btn btn-primary-outline display-4" href="https://mobiri.se">How To Play?</a></div>
                        </div>
                    </div>
                </div>


                
            </div>


        )
    }


}

export default Menu;