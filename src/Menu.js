import React from 'react';
import ReactDom from 'react-dom';
import "./Menu.css"
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
                
                <div>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>

                </div>
                <Link to="/Game">
                    <Button variant="primary" className="m-4" size="lg">
                        {this.props.title}
                    </Button>
                </Link>
                <Button variant="secondary" onClick={ ()=>this.increment() }>
                    {this.state.number}
                </Button>
            </div>
        )
    }

    //react dom

}

export default Menu;