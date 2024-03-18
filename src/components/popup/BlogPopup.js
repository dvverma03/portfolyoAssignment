import { DoraContext } from "@/src/Context";
import { useContext } from "react";
import Modal from "./Modal";
const BlogPopup = () => {
  const { blogs, blog, blogDetails } = useContext(DoraContext);
  console.log(blog)
  return (
    <Modal close={blogDetails}>
      <div className="content">
        <div className="img">
          <img src="https://www.rasmussen.edu/images/rasmussenlibraries/blogs/graphic-design-blogs-19f9365b5-450e-4b97-8263-d44fe9a6c941.jpg" alt="dora_img" />
        </div>
        <div className="des">
          <h4>{blog.title}</h4>
          <ul className="d-flex">
            <li>{blog.endDate}</li>
            <li>
              <a href="#">{blog.company_name
}</a>
            </li>
            <li>
              By <a href="#">Admin</a>
            </li>
          </ul>
          {blog.bulletPoints.map((e)=>(
            <p>
            {e}
          </p>
          ))}
          
          
        </div>
      </div>
    </Modal>
  );
};
export default BlogPopup;
