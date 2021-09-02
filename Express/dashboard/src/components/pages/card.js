
import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    constructor(props) {
        super(props);
        this.serviceUrl= "http://localhost:5000/api/blog/"
        this.state = {
            blog: [{}]
            
         }
    }
  
  componentDidMount() {
    axios.get(this.serviceUrl).then((res) => {
        this.setState({
          blog: res.data
        });
      })

  }
    render() {
        return (
            <div className="container">
       
            
                <div className="col-sm-12">
                <div className="row">
                {this.state.blog.map((i, j)=>
                
                <div key={j} className="col-sm-2 card center">
                <div className="text-center">
                <h5 >{i.name}</h5>
                <h2>{i.count}</h2>
                <button className="fa fa-caret-up btn btn-default " style={{color:"red"}}> {i.value}</button>&nbsp;
                    </div>
                  </div> 
                )}
                
                </div>
                </div>
        </div>
        

      
         );
    }
}


export default Card;