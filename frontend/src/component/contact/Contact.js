import React, { useState } from 'react'
import './Contact.css'
import { Footer } from '../footer/Footer'
import axios from 'axios'

export const Contact = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [toast, setToast] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {name, email, message}
    axios.post('http://127.0.0.1:8000/api/contact/', values)
    .then((response) => {
      if (response.status === 201){
        setName('') 
        setEmail('')
        setMessage('')
        setToast(true)
      }
    })
  }

  return (
    <>
    {toast && (
        <div className="container header mt-3">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong style={{fontSize:16}}>Thank you for connecting with us! We will reach you asap &#10084;&#65039;</strong>
            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      )}
    <div className="container header mt-5">
      <h4><b>Contact us</b></h4><hr className="header-hr" />
      <div className="row">
        <div className="col-lg-4">
          <div className="about-img text-center">
              <img src="assets/support.png" alt-text="contact tech blogs" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="contact-part mb-5">
              <div className="reply-heading mb-4">
                  <h5><b>We love to communicate with our fans!<br /><br />Drop the message for us -</b></h5>
              </div>
              <div className="contact-form">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label for="name" className="form-control-label mb-3">Name :</label><br />
                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="form-gorup mt-4">
                      <label for="email" className="form-control-label mb-3">Email Address :</label><br />
                      <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="from-group mt-4">
                      <label for="message " className="form-control-label mb-3">Message :</label><br />
                      <textarea rows="7" name="message" id="message" className="form-control"  value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                  </div><br />
                  <button type="submit" className="btn btn-primary mt-3">Submit</button><br />
                  <div className="about-text mt-4">
                      <h5>Thank you for your support! &#10084;&#65039;</h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </>
  )
}
