import React from 'react';
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

    render(){
        return(
            <div>
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
}

export default Menu;