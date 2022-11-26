import React from "react";
import styles from "../styles/Home.module.css";
import Typical from "react-typical";
import { Fade, LightSpeed } from "react-reveal";
import { Accordion, Carousel, WhyUs } from "../components";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <Carousel />
      </div>

      <div className={styles.home__typical}>
        <h1>
          <Typical
            loop={Infinity}
            steps={[
              "Welcome To",
              2000,
              "Sormorchea",
              2000,
              "Royal Enterprise",
              2000,
              "Cashew Farmers",
              2000,
              "First Choice",
              2000,
            ]}
          />
        </h1>
      </div>

      <Fade right>
        <div className={styles.who__weAreDiv}>
          <div className={styles.who__weArecontainer}>
            <p>Who We Are</p>
            <p>
              Were are a licensed cashew buying company based in Ghana Were are
              a licensed cashew buying company based in Ghana Were are a
              licensed cashew buying company based in Ghana Were are a licensed
              cashew buying company based in Ghana Were are a licensed cashew
            </p>
          </div>
        </div>
      </Fade>

      <div className={styles.name__marqueeWrapper}>
        <div className={styles.name__marquee}>
          <marquee width="100%" direction="left" height="100%" >
            Sormorchea Royal Enterprise! We make cashew farming interesting!
          </marquee>
        </div>
      </div>

      <div className={styles.whyUs}>
        <p className={styles.whyUs__caption}>Why choose us?</p>
        <div className={styles.whyUs__cards}>
          <WhyUs
            icon="/relate.png"
            text=" We work to establish and strengthen our bond with farmers and other
          stakeholders."
            caption="STRONG RELATIONSHIP"
          />
          <WhyUs
            icon="/scale.png"
            text="Sormorchea Royal Enterprise offers the best and fairest prices for cashew nuts."
            caption="FAIR PRICING"
          />
          <WhyUs
            icon="/money.png"
            text="We allocate GHC 1.00 to the communities for every bag of cashew we purchase."
            caption="GIVING BACK"
          />
        </div>
      </div>
  
      <div className={styles.faqs}>
        <p className={styles.faqs__caption} >FAQs</p>
        <LightSpeed left>
          <Accordion />
        </LightSpeed>
        <Fade left>
          <Accordion />
        </Fade>
        <LightSpeed left>
          <Accordion />
        </LightSpeed>
        <Fade right>
          <Accordion />
        </Fade>
        <LightSpeed right>
          <Accordion />
        </LightSpeed>
      </div>
    </div>
  );
}

export default Home;
