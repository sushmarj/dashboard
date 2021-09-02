import React, { Component } from 'react'
class Piechart extends Component {
    _onFocus=(e)=>{
        e.currentTarget.type = "date";
    }
    _onBlur=(e)=>{
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Start Date";
    }
    _onBlur2=(e)=>{
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "End Date";
    }
    render() { 
        return (
            <div className="row">
            <div className="graph">
            <h5>Users Overview</h5>   <hr/>
            
            <form>
                <div className="row">
            <div className="col-sm-6 form-group" >
            <div className="input-group input-group">
                
                  <input placeholder="Start Date" className="form-control" type="text" onFocus = {this._onFocus} onBlur={this._onBlur} id="date" /> 
              <input placeholder="End Date" className="form-control" type="text" onFocus = {this._onFocus} onBlur={this._onBlur2} id="date" /> 
              <span className="input-group-text">
                  <i className="fa fa-calendar-o "></i></span>
</div></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#">View Full report <i className="fa fa-arrow-right"></i> </a></div>
             </form> <hr/>
             <div className="center">
             <div className="row"> 
                    <p id="rectangle" style={{"border-style": "solid", "border-color": "blue"}}></p>Current Month
                    <p id="rectangle" style={{"border-style": "dashed", "border-color": "red"}}></p>Past Month
            
             </div>   </div>
</div>
            
            <div className="draft">
                <h5>Users by device</h5>   <hr/>

                    <span className="center piechart "></span> <br/>
                    <div className="row"> 
                    <p id="rectangle" style={{"background":"rgb(34, 118, 243)"}}></p>Desktop
                    <p id="rectangle" style={{"background":"rgb(95, 151, 235)"}}></p>Tablet
                    <p id="rectangle" style={{"background":"rgb(134, 180, 250)"}}></p> Mobile 
                      </div> <hr/>
                      <select name="User" className="btn btn-default" id="User">

<option value="week">Last week</option>
<option value="today"  className="glyphicon glyphicon-user" >Today</option>
<option value="month"  className="fa fa-user">Last Month</option>
<option value="year">Last year</option>
</select>
<a href="#">View Full report <i className="fa fa-arrow-right"></i> </a>

            </div>
            </div>
        );
    }
}
export default Piechart;