import React, {Component} from 'react';
//import './index.css';

class CharInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            expanded:false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(){
        this.setState({ expanded: !this.state.expanded})
    }

    close(){
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        const info = this.props.charInfo;
        if(!this.state.expanded){
            return <button onClick = {this.open}>Show info</button>
        }
        return(
            <div>
                <p onClick ={this.close}>Hide Info</p>
                <ul>
                    <li>
                        <h3>
                            Gender: {info.gender}
                        </h3>
                    </li> 
                    <li>
                        <h3>
                            Birth Date: {info.birth_year}
                        </h3>
                    </li>
                    <li>
                        <h3>
                            eye color: {info.eye_color}
                        </h3>
                    </li>
                    
                </ul>

            </div>
        )
    }
}
export default CharInfo;