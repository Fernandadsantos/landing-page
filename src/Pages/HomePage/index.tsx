import React from "react";
import Header from "../../Components/header";
import illustration from "../../assets/Illustration.svg";
import companyLogo1 from "../../assets/Company-logo-1.svg";
import companyLogo2 from "../../assets/Company-logo-2.svg";
import companyLogo3 from "../../assets/Company-logo-3.svg";
import companyLogo4 from "../../assets/Company-logo-4.svg";
import companyLogo5 from "../../assets/Company-logo-5.svg";
import companyLogo6 from "../../assets/Company-logo-6.svg";
import illustrationCard1 from "../../assets/illustrationCard-1.svg";
import illustrationCard2 from "../../assets/illustrationCard-2.svg";
import TitleBox from "../../Components/titleBox";
import RedirectCard from "../../Components/redirectCard";
import faceIllustration from "../../assets/faceIllustration.svg";
import "./style.css";
import Card from "../../Components/card";
import CardInformation from "../../Components/cardInformation";

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
          <img src={illustration} alt="Illustration" width={500} />
        </div>
      </section>
      <div className="home-company-logo">
        <img src={companyLogo6} alt="Amazon" />
        <img src={companyLogo1} alt="Dribbble" />
        <img src={companyLogo2} alt="HubSpot" />
        <img src={companyLogo3} alt="Notion" />
        <img src={companyLogo4} alt="Netflix" />
        <img src={companyLogo5} alt="Zoom" />
      </div>
      <section className="home-services">
        <TitleBox
          title="Services"
          subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="home-services-cards">
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="gray"
          >
            <img src={illustrationCard1} alt="Illustration card" width={170} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="green"
          >
            <img src={illustrationCard2} alt="Illustration card" width={170} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="dark"
          >
            <img src={illustrationCard2} alt="Illustration card" width={170} />
          </RedirectCard>
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="gray"
          >
            <img src={illustrationCard1} alt="Illustration card" width={170} />
          </RedirectCard>
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="green"
          >
            <img src={illustrationCard1} alt="Illustration card" width={170} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="dark"
          >
            <img src={illustrationCard2} alt="Illustration card" width={170} />
          </RedirectCard>
        </div>
        <Card
          buttonContent="Get your free proposal"
          title="Let’s make things happen"
          paragraph="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        >
          <img src={faceIllustration} alt="illustration card" />
        </Card>
        <TitleBox
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </section>
    </div>
  );
}
