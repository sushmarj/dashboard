import React, {Component} from 'react';
import image from "./photo.jfif"
import axios from 'axios';
class Post extends Component {
  constructor() {
    super();
    this.serviceUrl = "http://localhost:5000/api/post/" ;
    this.serviceUrl2 = "http://localhost:5000/api/post2/" ;
    this.state = {
        post: [{}],
        post2:[{}]

    }
   
}

componentDidMount() {
    axios.get(this.serviceUrl).then((res) => {
        this.setState({ post: res.data });

    })
    axios.get(this.serviceUrl2).then((res) => {
      this.setState({ post2: res.data });

  })
}
    render() {

      return (
        <div style={{paddingLeft:"160px" }}>
        <h6 style={{color:'gray', paddingTop:'20px'}}>Components</h6>
        <h3>Blog Posts </h3>
        <div className="row">
        {this.state.post.map((i,j) =>
                    
        <div key={j} className="box">  
                    <div width="100%" height="40">
                    <span className="msg_container" > {i.tag}</span>
                    <span className="profile">
                    <div className="about-img ">
            <img src={image} alt="not found" /> </div> </span>
                        <img id="target" className="img-rounded" src={image} alt="not found" width="100%" height="200"/>
                        
             <div >{i.subject}</div>
            {i.message}
</div>{i.postdate}
          </div>
        )}
          </div>


          
          <div className="row">
               {this.state.post2.map((i,j) =>
               
              <div className="box2" width="50%" >
                 <span className="msg_container2" > {i.tag}</span>
                    <span className="profile2">
                    <div className="about-img ">
            <img src={image} alt="not found" /> </div> </span>
              <li className="aligned"><img id="target" className="img-rounded" src={image} alt="not found" width="40%" height="320"/>
              {i.subject}<br/><br/>
              {i.message} <br/><br/>
              {i.postdate}</li>
              </div>  )}
              
          </div>


          <div className="row">
        {this.state.post.map((i,j) =>
                    
        <div key={j} className="box">

                    <div className="well well-thumbnail " width="100%" height="40">
                     <span className="msg_container" > {i.tag}</span>
                    <span className="profile">
                    <div className="about-img ">
            <img src={image} alt="not found" /> </div> </span>
                        <img id="target" className="img-rounded" src={image} alt="not found" width="100%" height="200"/>
             
             <div >{i.subject}</div>
            {i.message}
</div>{i.postdate}
          </div> 
        )}
          </div>


          </div>
          
          
        );
    }
    }
    
export default Post;