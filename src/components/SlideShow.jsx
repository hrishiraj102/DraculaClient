import { Grid } from '@mui/material';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideStyle.css';
import 'react-slideshow-image/dist/styles.css'
import { FitScreen } from '@mui/icons-material';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


const SlideShow = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Grid sx={{width: 'FitScreen'}}>
        <div className="containerSlide">
            <Slide {...proprietes} >
                {images.map((image, index) => (
                    <div className="each-slide" key={index}>
                        <div>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
        </Grid>
    );
};





export default SlideShow;