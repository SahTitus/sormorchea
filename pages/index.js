import React from "react";
import styles from "../styles/Home.module.css";
import Typical from "react-typical";
import { Accordion, Carousel, WhyUs } from "../components";
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
      <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
        <Carousel />
        </Reveal>
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

      <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
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
      </Reveal>

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
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <Accordion />
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <Accordion />
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <Accordion />
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <Accordion />
        </Reveal>
        <Reveal right>
          <Accordion />
        </Reveal>
      </div>
    </div>
  );
}

export default Home;
