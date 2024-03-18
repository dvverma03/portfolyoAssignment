import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import { useEffect, useState } from "react";
import axios from "axios";

const Feedback = () => {


  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setProjects(data?.user?.projects)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);



  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-section-title-cont">
          {/* Feedback Title */}
          <div className="section_title project_section_desc wow fadeInUp">
            <h2>
              This is my project section <br />
              our work, view and see the technologies
            </h2>
          </div>
          {/* Slider arrow */}
          <div className="feedback-btn-cont wow fadeInUp">
            <a href="#" className="slider-arrow feedback-left">
              <img
                className="svg"
                src="images/icons/arrow-left.svg"
                alt="dora_img"
              />
            </a>
            <a href="#" className="slider-arrow active feedback-right">
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
              />
            </a>
          </div>
        </div>
        <Swiper
          {...doraSlider.feedbackSlider}
          className="swiper feedback-items-cont"
        >
          <div className="swiper-wrapper feedback-items wow fadeInUp">
            {/* 01 feedback item start */}
            {projects && projects.map((e, i)=>(
              <SwiperSlide key={i} className="swiper-slide feedback-item">
              <div className="project_cards_section">
                <img className="project_section_image" src={e?.image?.url} alt="dora_img" />
              </div>
              <div className="project_section_text">
                <h1>{e?.title}</h1>
                <p>This project made by using</p>
                <p>{e.techStack.join(",")}</p>
                <p>Technologies</p>
              </div>
              
            </SwiperSlide>
            ) )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default Feedback;






































// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Projects = () => {

//     const [services, setServices] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
//           setServices(data?.user?.projects);
//           console.log(data.user.projects)
//         } catch (err) {
//           console.log(err);
//         }
//       };
  
//       fetchData();
//     }, []);


//   return (
//     <div>
//     <h4>This is my projects section</h4>
//     <div className='project_section'>
//       {services && services.map((e)=>(
//         <div className='project_section_mainContainer'>
//             <img className='project_section_image' src={e?.image?.url} alt="" srcset="" />
//             <div>
//                 <p>{e.title}</p>
//                 <p>{e?.techStack.join(",")}</p>
//             </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Projects
