import React, { useEffect, useState } from 'react';
import './Home.css'
import { Footer } from '../footer/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Home = () => {

  const [data, setData] = useState([])

  const getData = async () =>{
    axios.get('http://127.0.0.1:8000/api/blog/')
    .then((response) => {
      setData(response.data);
    })
  }
  
  useEffect(() => {
      getData();
    }, []
  );
  
  return (
    <>
      <div className='container header mt-5'>
        <h4><b>Welcome to Tech Blogs</b></h4>
        <div className="info-part">
          <p>Hello guys, welcome to <b>Tech blogs.</b> We love to help beginners to learn web development's basic stuff simply and efficiently.</p>
        </div>
        <div className="categories mb-5">
          <h6 className="me-3 mb-3">Categories&nbsp; :&nbsp;</h6>
            <div className="category-link">
              <a className='cat-link'>Django</a>
            </div>
          <hr />
        </div>
        <div className="first-part">
          <h4><b>Latest blogs</b></h4>
          <hr className="header-hr" />
          <div className="post mt-3">
            <div className="row">
              {data.map((blog) => (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                  <Link to={`/blog/${blog.id}`}><img src={blog.image} alt-text={blog.image_alt} /></Link>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                    <Link to={`/blog/${blog.id}`} className="blog-title">
                      <h5><b>{blog.title}</b></h5>
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: `${blog.blog_text.slice(0, 249)}...` }}></p>
                    <div className="post-read-part mt-3">
                      <Link to={`/blog/${blog.id}`}><button className="btn btn-primary">Read more..</button></Link>
                      <p className="post-date">{blog.date_upload.split('T')[0]}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div><hr className="blog-hr" />
        </div>
      </div>
      <Footer />
    </>
  )
}
