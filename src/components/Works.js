import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PortfolioIsotope = dynamic(() => import("./PortfolioIsotope"), {
  ssr: false,
});
const Works = () => {

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
    <section className="works-section" id="works">
      <div className="container">
        {/* Work Title */}
        <div className="section_title wow fadeInUp center">
          <p>Portfolio</p>
          <h2>My Amazing Works</h2>
        </div>
        {/* Work Isotope */}
        <PortfolioIsotope projects={timelines}/>
      </div>
    </section>
  );
};
export default Works;
