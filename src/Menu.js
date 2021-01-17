import React from 'react';
import ReactDom from 'react-dom';
import "./Menu.css";
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


    //render biasa
    render(){
        return(           
            <div>
                
                <div class= "container-xl">
                    <h1>COVID FIGHTER</h1>
                    <p></p>
                </div>

                <div class= "container-xl">
                    <div class = "how_to">
                        <h4>
                            HOW TO PLAY
                        </h4>
                        <p>
                            
                        </p>
                    </div>

                </div>

                <div class="container-xl">
                    <div class = "row justify-content-center">
                
                {/* nope */}
                    {/* <div class = "tombol"> */}
                        {/* nope */}
                        
                        <Link to="/Game">
                            <Button  variant="primary" className="m-4" size="lg">
                                {this.props.title}
                            </Button>
                        </Link>

                        {/* <Button variant="secondary" onClick={ ()=>this.increment() }> */}
                            {/* {this.state.number} */}
                        {/* </Button> */}
                    {/* </div> */}
                    
                    </div>
                </div>

                
            </div>


        )
    }

    //react dom

}

export default Menu;