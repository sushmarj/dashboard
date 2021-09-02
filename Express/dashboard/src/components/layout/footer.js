import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
   
    render() { 
        return ( <div style={{paddingLeft:"260px", marginBottom :"20px"}}> <br/>
            
            <ul className="bottombar">
               
                  <footer className="page-footer font-small mdb-color ">
                  <ul className="list-inline">
            <Link className="list-inline-item">Home</Link>
            <Link className="list-inline-item">Service</Link>
            <Link className="list-inline-item">About</Link>
            <Link className="list-inline-item text-right">Products</Link>
            <Link className="list-inline-item">Blog</Link> 
           <li className="list-inline-item footer-copyright right" style={{color:'dark-gray'}}>
           Copyright © 2018 DesignRevision
       </li></ul> </footer> 
         </ul>      
                
                  
     
      </div> );
    }
}
 
export default Footer;
