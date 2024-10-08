import React from "react";
// @ts-ignore
const Services: React.FC = () => {
  return (
    <div>
      <section className="Feature-Section">
        <div className=" Container">
          <div className="Feature-Services">
            <div className="Feature-Services-Header">
              <h2>Our top services</h2>
            </div>
            <div className="Feature-Services-Description">
              <p>
                We provide customized productivity solutions, goals achievement
                programs and health improvement plans to help you gain control
                over your life
              </p>
              <div className="Services-Buttons">
                <div>
                  <button>
                    Get Started <span className="arrow">&#8594;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
