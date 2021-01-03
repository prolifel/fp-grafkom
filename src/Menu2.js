// import { Button } from 'bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import { Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import "./Menu.css";

class Menu2 extends React.Component{
    render (){
        return(
            <div>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>

                <div>

                </div>
                <Button>
                <Button variant="secondary" onClick={ ()=>this.increment() }>
                    {this.state.number}
                </Button>
                </Button>
            </div>
            
        );
    }
}

// ReactDom.render()

export default Menu2;