import React from "react";
import Header from "../../Components/header";
import illustration from "../../assets/Illustration.svg";
import companyLogo1 from "../../assets/Company-logo-1.svg";
import companyLogo2 from "../../assets/Company-logo-2.svg";
import companyLogo3 from "../../assets/Company-logo-3.svg";
import companyLogo4 from "../../assets/Company-logo-4.svg";
import companyLogo5 from "../../assets/Company-logo-5.svg";
import companyLogo6 from "../../assets/Company-logo-6.svg";
import member from "../../assets/Picture(q).png";
import member1 from "../../assets/Picture(1).png";
import member2 from "../../assets/Picture.png";
import img from "../../assets/9bd2d37e31683484f8df8c866af21435.png";
import illustrationCard1 from "../../assets/illustrationCard-1.svg";
import illustrationCard2 from "../../assets/illustrationCard-2.svg";
import TitleBox from "../../Components/titleBox";
import RedirectCard from "../../Components/redirectCard";
import faceIllustration from "../../assets/faceIllustration.svg";
import Card from "../../Components/card";
import CardModel from "../../Components/cardModel";
import Redirect from "../../Components/redirectLink";
import Divider from "../../Components/divider";
import Footer from "../../Components/footer";
import DropCard from "../../Components/dropCard";
import TeamCard from "../../Components/teamCard";
import Carousel from "../../Components/carousel";
import { CarouselData } from "../../interfaces";
import FormComponent from "../../Components/form";
import ButtonModel from "../../Components/button";
import "./style.css";

export default function HomePage() {
  const carouselData: CarouselData[] = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Diana White",
      title: "Marketing ",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Michael White",
      title: "CEO",
    },
  ];
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
          <ButtonModel content={"Book a consultation"} />
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
      <section className="home-title-section">
        <TitleBox
          title="Services"
          subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="home-services-cards">
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="light"
          >
            <img src={img} alt="Illustration card" width={210} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="green"
          >
            <img src={illustrationCard2} alt="Illustration card" width={210} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="dark"
          >
            <img src={illustrationCard2} alt="Illustration card" width={210} />
          </RedirectCard>
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="gray"
          >
            <img src={illustrationCard1} alt="Illustration card" width={210} />
          </RedirectCard>
          <RedirectCard
            titleTop="Search engine"
            titleBottom="optimization"
            link="/Search-engine-optimization"
            theme="green"
          >
            <img src={img} alt="Illustration card" width={210} />
          </RedirectCard>
          <RedirectCard
            titleTop="Social Media"
            titleBottom="Marketing"
            link="/Social-Media-Marketing"
            theme="dark"
          >
            <img src={illustrationCard2} alt="Illustration card" width={210} />
          </RedirectCard>
        </div>
        <Card
          buttonContent="Get your free proposal"
          title="Let’s make things happen"
          paragraph="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        >
          <img src={faceIllustration} alt="illustration card" />
        </Card>
      </section>
      <section className="home-title-section ">
        <TitleBox
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <CardModel color=" #fff" backgroundColor={"#191A23"} width={""}>
          <div className="text-banner">
            <h3 className="text-banner-content">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </h3>
            <Redirect path="#" color="#B9FF66" />
          </div>
          <Divider width={"0"} height={"150px"} color={"#FFFFFF"} />
          <div className="text-banner">
            <h3 className="text-banner-content">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </h3>
            <Redirect path="#" color="#B9FF66" />
          </div>
          <Divider width={"0"} height={"150px"} color={"#fff"} />
          <div className="text-banner">
            <h3 className="text-banner-content">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </h3>
            <Redirect path="#" color="#B9FF66" />
          </div>
        </CardModel>
      </section>
      <section className="home-title-section">
        <TitleBox
          title=" Our Working Process "
          subtitle="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <div className="drop-cards-section">
          <DropCard
            title={"Consultation"}
            numberTitle={"01"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <DropCard
            title={"Research and Strategy Development"}
            numberTitle={"02"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <DropCard
            title={"Implementation"}
            numberTitle={"03"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <DropCard
            title={"Monitoring and Optimization"}
            numberTitle={"04"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <DropCard
            title={"Reporting and Communication"}
            numberTitle={"05"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <DropCard
            title={"Continual Improvement"}
            numberTitle={"06"}
            content={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
        </div>
      </section>
      <section className="home-title-section">
        <TitleBox
          title={"Team"}
          subtitle={
            "Meet the skilled and experienced team behind our successful digital marketing strategies"
          }
        />
        <div className="team">
          <TeamCard
            img={member}
            name={"Michael Brown"}
            function={"Senior SEO Specialist"}
            linkedinRefer={""}
            description={
              "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
            }
          />
          <TeamCard
            img={member1}
            name={"John Smith"}
            function={"CEO and Founder"}
            linkedinRefer={""}
            description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          />
          <TeamCard
            img={member2}
            name={"Jane Doe"}
            function={"Director of Operations"}
            linkedinRefer={""}
            description={
              "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
            }
          />
          <TeamCard
            img={member2}
            name={"Jane Doe"}
            function={"Director of Operations"}
            linkedinRefer={""}
            description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          />
          <TeamCard
            img={member1}
            name={"John Smith"}
            function={"CEO and Founder"}
            linkedinRefer={""}
            description={
              "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
            }
          />
          <TeamCard
            img={member}
            name={"Michael Brown"}
            function={"Senior SEO Specialist"}
            linkedinRefer={""}
            description={
              "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
            }
          />
        </div>
        <div className="all-team">
          <ButtonModel content="See all team" width="269px" />
        </div>
      </section>
      <section className="home-title-section">
        <TitleBox
          title={"Testimonials"}
          subtitle={
            "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          }
        />
        <Carousel data={carouselData}></Carousel>
      </section>
      <section className="home-title-section">
        <TitleBox
          title={"Contact Us"}
          subtitle={
            "Connect with Us: Let's Discuss Your Digital Marketing Needs"
          }
        />
        <FormComponent></FormComponent>
      </section>
      <Footer />
    </div>
  );
}
