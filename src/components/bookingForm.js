import React from 'react';
import './bookingForm.css'


class Booking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form className="bookingForm">
          <label>
            Full Name *
            <input
              name="fullName"
              type="input"
              checked={this.state.fullName}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Email Address *
            <input
              name="fullName"
              type="email"
              checked={this.state.fullName}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
              <br/>
          What type of event are you hosting? 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Birthday">Birthday</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Wedding">Wedding</option>
            <option value="Brunch">Brunch</option>
            <option value="Conference">Conference</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Engagement Party">Engagement Party</option>
            <option value="Surprise Proposal">Surprise Proposal</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br/>
        <label>
           Date of the Event
            <input
              name="eventDate"
              type="date"
              checked={this.state.eventDate}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
           What time is the event?
            <input
              name="time"
              type="input"
              checked={this.state.time}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Is there a dress code for vendors?
            <input
              name="dressCode"
              type="input"
              value={this.state.dressCode}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Additional details about your event
            <textarea
              name="eventDetails"
              type="text-box"
              value={this.state.eventDetails}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            <input 
              value="Send"
              type="submit"/>
          </label>
        </form>
      );
    }
  }




export default Booking;