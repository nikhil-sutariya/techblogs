import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const Category = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const { name } = useParams();

  const getData = () => {
    axios.get(`http://127.0.0.1:8000/api/blog/${name}/`).then((response) => {
      setData(response.data);
    });
  };

  const getCategory = () => {
    axios.get("http://127.0.0.1:8000/api/category/").then((response) => {
      setCategory(response.data);
    });
  };

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  return (
    <>
      <div className="container header mt-5">
        <div className="categories mt-2 mb-4">
            <h6 className="me-3">Categories&nbsp; :&nbsp;</h6>
            {category.map((d) => (
                <>
                <div className="category-link">
                    <Link activeClassName="cat-active" to={`/category/${d.name}`} className="cat-link">{d.name}</Link>
                </div>
                </>
            ))}
            <hr />
            {data.map((d) => (
                <>
                    <h5><b>Latest {d.category_id} blogs</b></h5>
                </>
            ))}
            <hr className="header-hr" />
            {data.map((d) => (
                <>
                <div className="first-part">
                    <div className="post mt-3" data-aos="fade-up" data-aos-duration="1200">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <Link to={`/blog/${d.id}`}><img src={d.image} alt-text={d.image_alt} /></Link>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <Link to={`/blog/${d.id}`} className="blog-title">
                                    <h5><b>{d.title}</b></h5>
                                </Link>
                                <p dangerouslySetInnerHTML={{ __html: `${d.blog_text.slice(0, 249)}...` }}></p>
                                <div className="post-read-part">
                                    <Link to={`/blog/${d.id}`}><button className="btn btn-primary">Read more..</button></Link>
                                    <p className="post-date">{d.date_upload.split('T')[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div><hr className="blog-hr" />
	            </div><br></br></>
            ))}
	    </div>
      </div>
      <Footer />
    </>
  );
};
