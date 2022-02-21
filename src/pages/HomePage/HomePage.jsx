import React from "react";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";
import Languages from "../../components/Languages/Languages";

const HomePage = () => {
  return (
    <div className="homepage">

      <div className="homepage__lang">
        <Languages />
      </div>

      <div className="homepage__lang-title">GAME OF THRONES</div>
      
      <div className="homepage__footer" >
        <Footer />
      </div>

    </div>
  );
};

export default HomePage;
