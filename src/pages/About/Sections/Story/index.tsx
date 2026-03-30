import React from "react";
import "./style.css";

import img1910 from "../../../../assets/images/history/history-1910.png";
import img1990 from "../../../../assets/images/history/history-1990.png";
import img2010 from "../../../../assets/images/history/history-2010.png";

const Story: React.FC = () => {
  return (
    <section className="history">
      <div className="history__container">
        <div className="history__grid">
          <div className="history__card history__card--text card-text-1">
            <h3 className="history__year">1910</h3>
            <p className="history__description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>

          <div className="history__card history__card--image card-image-1">
            <img src={img1910} alt="1910" className="history__image" />
          </div>

          <div className="history__card history__card--image card-image-2">
            <img src={img1990} alt="1990" className="history__image" />
          </div>

          <div className="history__card history__card--text card-text-2">
            <h3 className="history__year">1990</h3>
            <p className="history__description">
              Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
              nisi, dolor sit amet consectetur adipiscing elit mattis sit
              phasellus mollis sit aliquam sit.
            </p>
          </div>

          <div className="history__card history__card--text card-text-3">
            <h3 className="history__year">2010</h3>
            <p className="history__description">
              Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
              tempus, sit aliquam sit nullam neque ultrices.
            </p>
          </div>

          <div className="history__card history__card--image card-image-3">
            <img src={img2010} alt="2010" className="history__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;