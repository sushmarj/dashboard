import React, { Component } from 'react'
import axios from 'axios';
class Referral extends Component {
    constructor(props) {
        super(props);
        this.serviceUrl= "http://localhost:5000/api/referral/"
        this.state = {
            referral: [{}]
         }
    }
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({
              referral: res.data
            });
          })
    
      }
    render() {
        return (
            <div className="row">
                <div >
                <h5>New Draft</h5> <hr/>
                <table class="table ">
                <thead/>   
                <tbody>
                {this.state.referral.map((i,j)=>
                     <tr>
                     <td key={i.id} scope="row">{i.name}</td>
                     <td>{i.count}</td>
                     </tr>
                    
                   
                    
                     )}
                </tbody>
                </table>
                <select name="User" className="btn btn-outline-primary"  id="User">

<option value="week">Last week</option>
<option value="today"  className="glyphicon glyphicon-user" >Today</option>
<option value="month"  className="fa fa-user">Last Month</option>
<option value="year">Last year</option>

</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="#">Full report <i className="fa fa-arrow-right"></i> </a>
                </div>
                
            </div>
        )
    }
}
export default Referral;