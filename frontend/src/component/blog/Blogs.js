import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Blogs.css'
import { Footer } from '../footer/Footer'

export const Blogs = () => {

  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [toast, setToast] = useState(false)

  const { id } = useParams()

  const getData = async () =>{
    axios.get(`http://127.0.0.1:8000/api/blog/${id}/`)
    .then((response) => {
      setData(response.data);
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {name, email, comment}
    axios.post('http://127.0.0.1:8000/api/feedback/', values)
    .then((response) => {
      if (response.status === 201){
        setName('') 
        setEmail('')
        setComment('')
        setToast(true)
      }
    })
  }

  useEffect(() => {
      getData();
    }, []
  );

  return (
    <>
      {toast && (
        <div className="container header mt-3">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong style={{fontSize:16}}>Thank you for your feedback &#10084;&#65039;</strong>
            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      )}
      <div className="container header mt-5">
        <h4 className="mt-2"><b>{data.title}</b></h4><br />
        <div className="article">
          <img src={ data.image } alt-text={ data.image_alt } /><br /><br />
          <div dangerouslySetInnerHTML={{ __html: `${data.blog_text}` }} />
        </div>
        <hr />
        <div className="reply-part">
          <div className="reply-heading">
            <h5><b>We love to hear from our adoring fans. &nbsp;Leave a reply -</b></h5><hr className="header-hr" />
          </div><br />
          <div className="reply-form">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name" className="form-control-label mb-3">Name :</label><br />
                <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-gorup mt-4">
                <label htmlFor="email" className="form-control-label mb-3">Email Address :</label><br />
                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="from-group mt-4">
                <label htmlFor="comment " className="form-control-label mb-3">Comment :</label><br />
                <textarea rows="7" name="comment" id="comment" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
              </div><br />
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
