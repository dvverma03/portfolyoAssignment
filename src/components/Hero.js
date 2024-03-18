import axios from "axios";
import { useEffect, useState } from "react";

const Hero = () => {

  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setHero(data?.user?.about);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 


  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>{hero?.name}</h1>
            <h3>{hero?.title}</h3>
            <p>
              {hero?.subTitle}
            </p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src={hero?.avatar?.url} alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
