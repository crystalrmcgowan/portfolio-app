import React, { Component } from "react"

export default class Contact extends Component {
  render() {
    return (
      <div className="contactMe">
        <form>
          <label className="fName">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label>Your Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            rows="10"
            columns="10"
          />

          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    )
  }
}
