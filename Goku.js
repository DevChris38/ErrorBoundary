import { Component } from 'react'
import goku from '../goku.png'

class Goku extends Component {

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
                <img onClick={this.handleClick} src={goku} alt="goku" width={250} height={360}/><br/>
            </div>
        )
    }
}

export default Goku;
