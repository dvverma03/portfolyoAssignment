import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import { useEffect, useState } from "react";
import axios from "axios";

const Feedback = () => {


  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setFeedback(data?.user?.testimonials);
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
          <div className="section_title wow fadeInUp">
            <h2>
              Clients are satisfied for <br />
              our work, view feedback
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
            {feedback && feedback.map((e, i)=>(
              <SwiperSlide key={i} className="swiper-slide feedback-item">
              <div className="feedback-active-img">
                <img src={e?.image?.url} alt="dora_img" />
              </div>
              <div className="feedback-info-cont">
                <div className="feedback-title-cont">
                  <h3>Awesome Service!</h3>
                  <div className="feedback-title-element">
                    <img
                      src="./images/bg_elements/feedback-element.svg"
                      alt="dora_img"
                    />
                  </div>
                </div>
                <p className="feedback-txt">
                  {e?.review}
                </p>
                <div className="feedback-person-info">
                  <div className="feedback-person-img">
                    <img src="images/testimonials/2.png" alt="dora_img" />
                  </div>
                  <div className="feedback-person-name">
                    <h4>{e?.name}</h4>
                    <p>{e?.position}</p>
                    <div className="feedback-star-cont">
                      <ul>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
