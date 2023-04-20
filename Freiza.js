import { Component } from 'react'
import freiza from '../freiza.png'

class Freiza extends Component {

    state = {
        gg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-danger'
        })
    }


    render(){

        if (this.state.bg === "bg-danger") {
            throw new Error();
        }

        return(
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} src={freiza} alt="freiza" width={178} height={384}/><br/>
            </div>
        )
    }
}

export default Freiza;
