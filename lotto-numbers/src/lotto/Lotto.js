import React from "react";
import './Lotto.css'

class Lotto extends React.Component {

    constructor() {
        super();
        this.state = {
             data :"",
            data1 :"",
            data2 :"",
            data3 :"",
            data4 :"",
            data5 :"",
            data11 :""
        }
    }
click = () => {
    this.setState({data : Math.floor(Math.random()*50)})
    this.setState({data1 : Math.floor(Math.random()*50)})
    this.setState({data2 : Math.floor(Math.random()*50)})
    this.setState({data3 : Math.floor(Math.random()*50)})
    this.setState({data4 : Math.floor(Math.random()*50)})
    this.setState({data5 : Math.floor(Math.random()*50)})
    this.setState({data11 : Math.floor(Math.random()*10)})
    
}

reset = () => {
    this.setState({   data :null,
    data1 :null,
    data2 :null,
    data3 :null,
    data4 :null,
    data5 :null,
    data11:null
})
}

render()   { return(
        <div>
        <h1>Lotto 6/49</h1>
        <p>Generating lucky numbers</p>
       <ul>
        <li>{this.state.data}</li>
        <li>{this.state.data1}</li>
        <li>{this.state.data2}</li>
        <li>{this.state.data3}</li>
        <li>{this.state.data4}</li>
        <li>{this.state.data5}</li>
        <li>{this.state.data11}</li>
        </ul> 

        <button className="btn"  name="Reset"
      onClick={this.reset}>Reset</button>
      
        <button className="btn" onClick={this.click}>Show me lucky number</button>
    </div>
        )}
    }

export default Lotto
