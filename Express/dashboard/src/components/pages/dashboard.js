import React, {Component} from 'react';
import Card from './card';
import Disscusion from './disscusion';
import Piechart from './piechart';

class Dashboard extends Component {
    render() {
      return (
          <div style={{paddingLeft:"160px" , paddingRight:'0px'}}>
          <h6 style={{color:'gray', paddingTop:'20px'}}>Dashboard</h6>
          <h3>Blog Overview </h3>
          <Card/>
          <Piechart/>
        <Disscusion/>
         
          </div>
        );
    }
    }
    
export default Dashboard;