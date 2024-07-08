import React from "react";
import Header from "../../Components/header";
import ilustration from "../../assets/Illustration.svg";
import companyLogo1 from "../../assets/Company-logo-1.svg";
import companyLogo2 from "../../assets/Company-logo-2.svg";
import companyLogo3 from "../../assets/Company-logo-3.svg";
import companyLogo4 from "../../assets/Company-logo-4.svg";
import companyLogo5 from "../../assets/Company-logo-5.svg";
import companyLogo6 from "../../assets/Company-logo-6.svg";
import "./style.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <section className="home-poster">
        <div className="home-content-poster">
          <h2>Navigating the digital landscape for success</h2>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button>Book a consultation</button>
        </div>
        <div>
          <img src={ilustration} alt="ilustration" width={500} />
        </div>
      </section>
      <div className="home-company-logo">
        <img src={companyLogo1} alt="" />
        <img src={companyLogo2} alt="" />
        <img src={companyLogo3} alt="" />
        <img src={companyLogo4} alt="" />
        <img src={companyLogo5} alt="" />
        <img src={companyLogo6} alt="" />
      </div>
    </div>
  );
}
