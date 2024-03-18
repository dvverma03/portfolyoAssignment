import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = ({projects}) => { 

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const { portfolio_modal_show } = useContext(DoraContext);

  return (
    <div className="work-isotope-filter">
      <ul className="works-list-ul wow fadeInUp">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        <li
          className={`c-pointer ${activeBtn("youtube")}`}
          onClick={handleFilterKeyChange("youtube")}
          data-filter=".youtube"
        >
          Youtube
        </li>
        <li
          className={`c-pointer ${activeBtn("vimeo")}`}
          onClick={handleFilterKeyChange("vimeo")}
          data-filter=".vimeo"
        >
          Vimeo
        </li>
        <li
          className={`c-pointer ${activeBtn("soundcloud")}`}
          onClick={handleFilterKeyChange("soundcloud")}
          data-filter=".soundcloud"
        >
          Soundcloud
        </li>
        <li
          className={`c-pointer ${activeBtn("popup")}`}
          onClick={handleFilterKeyChange("popup")}
          data-filter=".popup"
        >
          Popup
        </li>
        <li
          className={`c-pointer ${activeBtn("details")}`}
          onClick={handleFilterKeyChange("details")}
          data-filter=".details"
        >
          Details
        </li>
      </ul>
      {/* work isotope items */}
      <div className="works-row wow fadeInUp">
        {/* Youtube */}
        <div className="works-col youtube">
          <a href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1">
            <img src="https://techcrunch.com/wp-content/uploads/2023/02/alexander-shatov-niUkImZcSP8-unsplash.jpg?w=730&crop=1" alt="dora_img" />
          </a>
        </div>
        {/* Vimeo */}
        <div className="works-col vimeo">
          <a href="//player.vimeo.com/video/132528823?autoplay=1">
            <img src="https://www.lifewire.com/thmb/PhW9E-5EXgBkEiKUwiXrIM5qsw4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vimeo-5ae0e7a2fa6bcc0036691998.jpg" alt="dora_img" />
          </a>
        </div>
        {/* Details */}
        <div className="works-col details">
          <a
            href="#"
            className="details-item"
            onClick={(e) => {
              e.preventDefault();
              portfolio_modal_show(true);
            }}
          >
            <img src="https://garagedoors.files.wordpress.com/2011/09/inspect.jpg" alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href="https://storage.googleapis.com/website-production/uploads/2014/03/pop-up-ads-examples.jpg">
            <img src="https://storage.googleapis.com/website-production/uploads/2014/03/pop-up-ads-examples.jpg" alt="dora_img" />
          </a>
        </div>
        {/* Soundcloud */}
        <div className="works-col soundcloud">
          <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1">
            <img src="https://ew.com/thmb/m4hc86lh-QaXAl1U91-V2MGRWZk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Soundcloud-30b9efaf99f54cd6bdb2a45cd18cf444.jpg" alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href="https://storage.googleapis.com/website-production/uploads/2014/03/pop-up-ads-examples.jpg">
            <img src="https://storage.googleapis.com/website-production/uploads/2014/03/pop-up-ads-examples.jpg" alt="dora_img" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PortfolioIsotope;
