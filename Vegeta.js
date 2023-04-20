import { Component } from 'react';
import vegeta from '../vegeta.png';

class Vegeta extends Component {

    state = {
        gg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render(){
        return(
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} src={vegeta} alt="vegeta" width={250} height={362}/><br/>
            </div>
        )
    }
}

export default Vegeta;
