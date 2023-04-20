import React from 'react';
import './task.css';

function validate(phone) {
  let result = phone.match(/\+375/);
  let result1 = phone.match(/\+375(?=29|44|25|33)/);
  return {
    phone: phone.length === 4 && !result || phone.length > 4 && !result1 
  };
}

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
    };
  }

  handlePhoneChange = evt => {
    this.setState({ phone: evt.target.value });
    console.log(this.state.phone);
  };

  render() {
    const errors = validate(this.state.phone);
    return (
      <div id="task-wraper">
        <input
          className={errors.phone ? "error" : "success"}
          type="text"
          placeholder="Enter your phone"
          maxLength="13"
          value={this.state.phone}
          onChange={this.handlePhoneChange}
        />
        
      </div>
    );
  }
}


