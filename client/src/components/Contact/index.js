import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

  state = {
    name: '',
    lastName: '',
    email: '',
    message: '',
    sent: false
  }

  //handle input
  handleName = (e) => {
    this.setState({
      name: e.target.value
    }
    )
  }
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    }
    )
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    }
    )
  }
  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    }
    )
  }


  //handle Submit

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/api/contact', data)
      .then(res => {
        this.setState({
          sent: true,
        }, this.resetForm())
      })
      .catch(err => {
        console.log('message not sent')
      })
  }

  //for setting initial data

  resetForm = () => {
    this.setState({
      name: '',
      lastName: '',
      email: '',
      message: ''
    })

    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 3000)
  }


  render() {
    return (
      // <!--Section: Contact v.2-->
      <section className="mb-4" >

        {/* <!--Section heading--> */}
        <h2 className="h1-responsive font-weight-bold text-center my-4" > Contact us</h2>
        {/* <!--Section description--> */}
        <p className="text-center w-responsive mx-auto mb-5" > Do you have any questions ? Please do not hesitate to contact us directly.Our team will come back to you within
  a matter of hours to help you.</p >

        <div className="row">

          {/* <!--Grid column--> */}
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="send" method="POST" >

              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!--Grid column--> */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text"
                      id="name" name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleName}
                    />
                    <label htmlFor="name" >First name</label>
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text"
                      id="name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.handleLastName} />
                    <label htmlFor="lastName" >Last Name</label>
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"
                      value={this.state.email}
                      onChange={this.handleEmail} />
                    <label htmlFor="email" className="">Your email</label>
                  </div>
                </div>
                {/* <!--Grid column--> */}

              </div>
              {/* <!--Grid row--> */}

              {/* <!--Grid row--> */}
              <div className="row">

                {/* <!--Grid column--> */}
                <div className="col-md-12">

                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"
                      value={this.state.message}
                      onChange={this.handleMessage}></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>

                </div>
              </div>
              {/* <!--Grid row--> */}

            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary" type='Submit' onClick={this.formSubmit}>Send</a>
            </div>
            <div className="status"></div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

        </div>

      </section >
      // <!--Section: Contact v.2-->

    )
  }
}

