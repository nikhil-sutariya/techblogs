import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import './About.css'

export const About = () => {
  return (
    <>
      <div className='container header mt-5'>
        <h4><b>About us</b></h4>
        <hr className="header-hr" /><br />
        <div className="row">
          <div className="col-lg-4">
            <div className="about-img text-center">
              <img src="assets/team.png" alt-text="about tech blogs" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-text">
              <h3>Who we are?</h3><hr />
                <p>We empower people with web development literacy, so they can read beginner friendly blogs about web development technologies, ask better questions and make better sense of the world. This passion powers our work and our community service.</p><br />
                <h5>Thank you for your support! &#10084;&#65039;</h5><br />
            </div>
          </div>
        </div><hr /><br />
        <div className="founder">
          <div className="founder-head text-center">
            <h4 className="mt-3"><b>Founder of Tech Blogs</b></h4>
            <hr className="body-hr" /><i className="fa fa-star fa-lg"></i><hr className="body-hr" />
          </div>
          <div className="founder-img text-center">
            <img src="assets/founder.jpg" alt-text="founder-tech-blog" />
          </div><br />
          <div className="founder-det">
            <h4><b>Nikhil Sutariya</b></h4>
            <p>Hello guys, I'm Nikhil Sutariya founder of Tech Blogs. Hope you are good and learn many things from Tech Blogs. Professionally I'm a Python developer. When I started to dive into web development I face many problems at the beginning. Later on daily practice and actively learning makes me an experienced developer. Once I was a beginner, I was stuck at stages to create web projects, so I decided to make a website that helps beginners and who want to start, learn and ready deep diving into web development.<br /></p><h5>Keep supporting! &#10084;&#65039;</h5>
            <br />
            <div className="details">
              <h5 className="mb-3">Contact me on :</h5>
              <Link to="http://nikhilsutariya.epizy.com/?i=1" target="_blank"><i className="fas fa-globe me-2"></i></Link>
              <Link to="https://www.linkedin.com/in/nikhil-sutariya-0a2727b8/" target="_blank"><i className="fab fa-linkedin me-2"></i></Link>
              <Link to="https://www.instagram.com/_nikhil_sutariya/" target="_blank"><i className="fab fa-github me-2"></i></Link>
              <Link to="https://github.com/nikhil-sutariya" target="_blank"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
