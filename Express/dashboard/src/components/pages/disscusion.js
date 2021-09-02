import React, {Component} from 'react';
import image from "./photo.jfif"
import axios from 'axios';
import Referral from './referral';
class Disscusion extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/draft/" ;
        this.serviceUrl2 = "http://localhost:5000/api/dis/" ;
        this.state = {
            draft:[{
                subject:"",
                message:""
            }],
            dis:[{}]
    
        }
       
    }
    
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ draft: res.data });
    
        })
        axios.get(this.serviceUrl2).then((res) => {
            this.setState({ dis: res.data });
    
        })
    }
    onChanged= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
            let newdraft =[...this.state.draft];
            let newTask={
                subject:this.state.subject,
                message:this.state.message
            }
        axios.post(this.serviceUrl, newTask).then((res)=>{
            newdraft.push(newTask);
            this.setState({draft:newdraft})
        })
    
       
    }
    render() {
        const {subject, message}=this.state;
      return (
          <div>
                <div className="row " >
          <div className='draft col-sm-12'>
          <h5>New Draft</h5> <hr/>
          <form onSubmit={this.onSubmit} >
            <div className="form-group">
            <div className="input-group input-group-lg">
            <input type="text" className="form-control" onChange={this.onChanged} value={subject} name="subject" placeholder="Brave New World "/> 
            </div></div> <br/>
            <div className="form-group">
            <div className="input-group input-group-lg">
            <textarea className="form-control" onChange={this.onChanged} value={message} name="message" rows="11" cols="50" style={{color:'gray'}} placeholder="World can be like a X-rays if you use them properly...">
              
            </textarea>  
            </div></div> <br/>
            <button className="btn btn-primary" type="submit">Create Draft</button>
            </form>
          </div>
          <div className='draft'>
          <h5>Disscusion</h5> <hr/>
          {this.state.dis.map((i,j) =>
           <div > 
          <div className="aligned">
            <img src={image} alt="not found" className="picture"/> 
            
             {i.subject} 
            {i.message}</div>
             <button className="fa fa-check btn btn-outline-dark"> Approve</button>&nbsp;
        <button 
         className=" fa fa-close btn btn-outline-dark">&nbsp; Reject</button> &nbsp;
         <button 
         className="fa fa-ellipsis-v btn btn-outline-dark">&nbsp; Edit</button> <hr/>
         </div> 
          )}<div className="text-center">
              <button>&nbsp; View All Comments &nbsp;</button>
          </div>
          </div>
            <div className='draft col-sm-12'><Referral/></div>   
          </div>
          </div>
        );
    }
    }
    
export default Disscusion;