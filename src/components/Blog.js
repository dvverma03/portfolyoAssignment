import { useContext, useEffect, useState } from "react";
import { DoraContext } from "../Context";
import axios from "axios";

const Blog = () => {
  const { blogDetails, blogs } = useContext(DoraContext);
  const [timelines, setTimelines] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setTimelines(data?.user?.timeline);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="blog-section fill-section" id="blog">
      <div className="container">
        {/* Blog Titel */}
        <div className="section_title wow fadeInUp center">
          <p>From My Blog</p>
          <h2>Our Recent Updates, Blog, Tips, Tricks &amp; More</h2>
        </div>
        <div className="blog-items">
          {timelines && timelines.slice(1, 5).map((timeline,i) => (
            <div className="blog-item" key={i}>
              <div className="wow fadeInUp item__">
                <div className="blog-date-cont">
                  <p>{blogs[i].date}</p>
                </div>
                <a
                  href="#"
                  className="blog-item-img"
                  onClick={() => blogDetails(timeline)}
                >
                  <img src={blogs[i].img} alt="dora_img" />
                </a>
                <div className="blog-info">
                  <a
                    href="#"
                    onClick={() => blogDetails(timeline)}
                    className="category"
                  >
                    {timeline.jobTitle}
                  </a>
                  <h4>
                    <a href="#" onClick={() => blogDetails(timeline)}>
                      {timeline.summary}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
