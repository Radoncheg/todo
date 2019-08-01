import React, {Component} from 'react';
import "./active-note.css"

export default class ActiveNote extends Component {
 
  render()
  {
    return(
    <div>
      <div className="field1">
        <div className="field2">
           <h3>{this.props.activeNote1.title}</h3>
        </div>
           <div className="field3">
           <h5>{this.props.activeNote1.date}</h5>
        </div>
      </div>
      <div className="field3">
      <hr></hr>
        {this.props.activeNote1.content}
      </div>
    </div>
    );
  }
}
