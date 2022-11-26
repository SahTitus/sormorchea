import React from "react";
import styles from "../styles/Carousel.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const classes = {
  root: {
    position: "relative",
  },
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <div style={classes.root}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew8.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew9.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew15.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew10.jpeg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew5.jpeg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew4.png" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/small.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/tree.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew19.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew16.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew11.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew12.jpg" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew6.webp" alt="cashew" width={500} height={400} />
          </div>
          <div className={styles.img} style={Object.assign({}, classes.slide)}>
            <Image src="/cashew1.jpg" alt="cashew" width={500} height={400} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
