var React = require('react');
var Connect = require('./Connect');

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <Connect/>
      </div>

    )
  }
}

module.exports = Contact;
