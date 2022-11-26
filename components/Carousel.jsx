import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pc1 from '../images/Pc1.jpg'
import Pc from '../images/Pc.jpg'
// import Pagination from './Pagination';
import Pc2 from '../images/BnB.jpg'
import PVB from '../images/PVB.jpg'
import Pc3 from '../images/PB.jpg'
import Sun from '../images/Sun.jpg'
import Stu from '../images/Stu.jpg'
import Pc6 from '../images/Pc6.jpg'
import Pc8 from '../images/Pc8.jpg'
import PQu from '../images/PQu.jpg'
import Pc7 from '../images/Pc7.jpg'
import ForeB from '../images/ForeB.jpg'
import ForSm from '../images/ForSm.jpg'
import styles from '../styles/Carousel.module.css'
import { Zoom } from 'react-reveal';
import Image from 'next/image';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const classes = {
root: {
position: 'relative',
},
slide: {

minHeight: 250,
color: '#fff',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
};

class DemoAutoPlay extends React.Component {
state = {
index: 0,
};

handleChangeIndex = index => {
this.setState({
index,
});
};

render() {
const { index } = this.state;

return (
        <div className={styles.carousel}>
          <div style={classes.root}>
            <Zoom top>
             <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src='/cashew8.jpg' alt='cashew' width={500} height={400}  /></div>            
                <div className={styles.img} style={Object.assign({}, classes.slide, classes.slide1)}><Image src="/cashew9.jpg" alt='cashew' width={500} height={400} /></div>
                <div className={styles.img} style={Object.assign({}, classes.slide, classes.slide1)}><Image src="/cashew15.jpg" alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src="/cashew10.jpeg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src="/cashew5.jpeg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src="/cashew4.png"  alt='cashew' width={500} height={400} /></div>  
                <div  className={styles.img}  style={Object.assign({}, classes.slide, classes.slide3)}><Image src="/small.jpg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img}  style={Object.assign({}, classes.slide, classes.slide3)}><Image src="/tree.jpg"alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide1)}><Image src="/cashew19.jpg" alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src="/cashew16.jpg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide3)}><Image src="/cashew11.jpg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide1)}><Image src="/cashew12.jpg"  alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide2)}><Image src="/cashew6.webp" alt='cashew' width={500} height={400} /></div>
                <div  className={styles.img} style={Object.assign({}, classes.slide, classes.slide3)}><Image src="/cashew1.jpg"  alt='cashew' width={500} height={400} /></div>
            </AutoPlaySwipeableViews>
        </Zoom>
        {/* <Pagination dots={9} index={index} onChangeIndex={this.handleChangeIndex} /> */}
       </div>
    </div>
        );
}
}

export default DemoAutoPlay;