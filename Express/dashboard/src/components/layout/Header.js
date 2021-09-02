import React from 'react';
import {Link} from 'react-router-dom';
import '../layout/style.css';
import image from "./photo.jpg"
const Header=()=> {
        return(
            <div className="wrapper">
               
                 <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false" > 
            
            <span className="icon-bar"></span>             
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
    <div className="sidebar">
        <h6 className="fa fa-grav">Shards Dashboard</h6>
        <ul>
            <li ><Link to="/dashboard" className="fa fa-pencil" > Blog Dashboard</Link></li>
            <li><Link to="/post" className="fa fa-list" > Blog Posts</Link></li>
            <li><Link to="/add" className="fa fa-plus-square-o" > Add New Post</Link></li>
            <li><Link to="/forms" className="fa fa-th" > Forms & Component</Link></li>
            <li><Link to="/table" className="fa fa-table" > Tables</Link></li>
            <li><Link to="/user" className="fa fa-user" > User Profile</Link></li>
            <li><Link to="/error" className="fa fa-exclamation" > Errors</Link></li>
        </ul> 
    </div>
    <div className="main_content">
        <div className="header">
            <form>
            <div className="form-group">
            <div className="input-group input-group-lg">
                <span className="input-group-text">
                  <i className="fa fa-search"></i></span>
              <input type="text" className="form-control" placeholder="Search for something..."/> 
              <span className="input-group-text">
                  <i className="fa fa-bell"></i></span>
                  <span className="input-group-text">
                  <div className="about-img">
            <img src={image} alt="not found" className="about-pic"/> </div>
                  </span>
                  
 
<select name="User"  id="User">
    <option value="Sierra"> Sierra Brooks</option>
    <option value="profile" > Profile</option>
    <option value="edit">Edit Profile</option>
    <option value="files">Files</option>
    <option value="transactions">Transactions</option>
    <option value="logout">Logout</option>
  </select>   
            </div>

          </div>
            </form>
           </div>  
    </div>
    
    </div>
   
            )
}

export default Header;