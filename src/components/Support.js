import { useEffect, useState } from "react";
import axios from "axios";

const Support = () => {
  const [support, setSupport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setSupport(data?.user?.about);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="support-section wow fadeInUp">
      <div className="container">
        <div className="support-items">
          <div className="row">
            {/* 01 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/exp.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>{support ? support.exp_year : ""} years job</h3>
                <p>Experience</p>
              </div>
            </div>
            {/* 01 support item end */}
            {/* 02 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/projectIcon.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>{support ? support.some_total : ""} Projects</h3>
                <p>Completed</p>
              </div>
            </div>
            {/* 02 support item end */}
            {/* 03 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/support.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>{support?.phoneNumber}</h3>
                <p>Online 24/7</p>
              </div>
            </div>
            {/* 03 support item end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
