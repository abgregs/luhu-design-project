import React from 'react'
import { FormErrors } from './FormErrors';

class Form extends React.Component {


  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      _reply: '',
      _subject: '',
      message: '',
      // disabledMsg: '',
      formErrors: {firstName: '', lastName: '', email: '', subject: '', message: ''},
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false

    }

      this.handleUserInput = this.handleUserInput.bind(this);
      // this.checkDisabled = this.checkDisabled.bind(this);
  }

  handleUserInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                function() { this.validateField(name, value) });
}

  // handleFocus(e) {
  //     if (this.state.onFocus === null) {
  //       this.setState({onFocus: 'input-focus'});
  //     } else {
  //       this.setState({onFocus: null});
  //     }
  //   }

//   checkDisabled(e) {
//     console.log("send button was clicked");
//     if (this.state.formValid === false) {
//       this.setState({
//         disabledMsg: 'Looks like we still need some information from you. Please check to ensure the form is filled out.'
//     })
//   }
// }


validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let firstNameValid = this.state.firstNameValid;
  let lastNameValid = this.state.lastNameValid;
  let emailValid = this.state.emailValid;
  let subjectValid = this.state.subjectValid;
  let messageValid = this.state.messageValid;

  switch(fieldName) {
    case 'firstName':
      firstNameValid = value.length >= 1;
      fieldValidationErrors.firstName = firstNameValid ? '': 'Please provide a first name.';
      break;
    case 'lastName':
      lastNameValid = value.length >= 1;
      fieldValidationErrors.lastName = lastNameValid ? '': 'Please provide a last name.';
      break;
    case '_replyto':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'Please provide a valid email address.';
      break;
    case '_subject':
      subjectValid = value.length >= 1;
      fieldValidationErrors.subject = subjectValid ? '': 'Please include a subject.';
      break;
      case 'message':
        messageValid = value.length >= 1;
        fieldValidationErrors.message = messageValid ? '': 'Please tell us a little more. What is this about? Write us a short message.';
        break;
    default:
      break;
  }

  this.setState({formErrors: fieldValidationErrors,
                  firstNameValid: firstNameValid,
                  lastNameValid: lastNameValid,
                  emailValid: emailValid,
                  subjectValid: subjectValid,
                  messageValid: messageValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid:
    this.state.firstNameValid &&
    this.state.lastNameValid &&
    this.state.emailValid &&
    this.state.subjectValid &&
    this.state.messageValid
  });
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}




  render () {
    return (
      <div>
      <section className="contact-wrap">
          <form action="https://formspree.io/abgregs@gmail.com"
      method="POST" className="contact-form">
      <div className="panel panel-default">
       <FormErrors formErrors={this.state.formErrors} />
     </div>
      <div className="col-sm-6">
        <div className={`input-block ${this.errorClass(this.state.formErrors.firstName)}`}>
          {/* <label htmlFor="">First Name</label> */}
          <input type="text" name="firstName" placeholder="First Name" className="form-control"
            value={this.state.firstName}
            onChange={this.handleUserInput}
            onBlur={this.handleUserInput}
          />
        </div>
      </div>
      <div className="col-sm-6">
          <div className={`input-block ${this.errorClass(this.state.formErrors.lastName)}`}>
          <input type="text" name="lastName" placeholder="Last Name" className="form-control"
            value={this.state.lastName}
            onChange={this.handleUserInput}
            onBlur={this.handleUserInput}
            />
        </div>
      </div>
      <div className="col-sm-12">
        <div className={`input-block ${this.errorClass(this.state.formErrors.email)}`}>
          {/* <label htmlFor="">Email</label> */}
          <input type="text" name="_replyto" placeholder="Email Address" className="form-control"
            value={this.state.email}
            onBlur={this.handleUserInput}
            />
        </div>
      </div>
      <div className="col-sm-12">
        <div className={`input-block ${this.errorClass(this.state.formErrors.subject)}`}>
          <input type="text" name="_subject" placeholder="Subject" className="form-control"
            value={this.state.subject}
            onChange={this.handleUserInput}
            onBlur={this.handleUserInput}
            />
        </div>
      </div>
      <div className="col-sm-12">
        <div className={`input-block textarea ${this.errorClass(this.state.formErrors.message)}`}>
          <textarea rows="4" type="text" name="message" placeholder="Message" className="form-control"
            value={this.state.message}
            onChange={this.handleUserInput}
            onBlur={this.handleUserInput}>
          </textarea>
        </div>
      </div>
      <div className="col-sm-12">
        <button type="submit" value="Send" disabled={!this.state.formValid} className="square-button"
        onClick={this.checkDisabled}>
          Send
        </button>
      </div>
      </form>
      </section>
      </div>
    )
  }

}

module.exports = Form;
