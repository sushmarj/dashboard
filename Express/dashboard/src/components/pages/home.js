import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.serviceUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population" ;
        this.state = {
            person: [{}]

        }
       
    }

    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ person: res.data });

        })
    }

    render(){
        return(
            <div>
            <div className="container">
                {this.state.person.map((j, i) =>
                <div className=" col-sm-4 " style={{color:'white'}}>

                    <div className="well well-thumbnail" width="100%" height="40" style={{background:'black'}}>
                        <img id="target" className="img-rounded" src={j.image} alt="not found" width="100%" height="200"/>
                        <br/><b>{j.Nation}</b><br />
                        <b>Event Date and Time</b> &nbsp;&nbsp;{j.Population} &nbsp;&nbsp;            
        <button className="btn btn-info btn-block"  onClick={() => this.showDetails(j._id)}>Show More Details</button> <br/>
        </div>
        </div>)}

        </div>



         </div>
        );
}
}
export default Home;

