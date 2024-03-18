import axios from "axios";
import { useEffect, useState } from "react";

const Experience = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setSkills(data?.user?.skills);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {skills &&
            skills.map((e, index) => (
              <div key={index} className="experience-item">
                <div className="experience-info">
                  <p>{e.name}</p>
                  <p>{e.percentage}</p>
                </div>
                <div className="progress-line" data-percent={e.percentage}>
                  <span />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
