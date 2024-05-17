import React, { useEffect, useState } from 'react';
import styles from './slider.module.css'; 

export default function Slider() {
    const [currImg, setCurrImg] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const img = [
        "/images/download (2).png",
        "/images/download (6).png",
        "/images/download (7).png",
        "/images/download.jpeg",
    ];

    const startSlide = () => {
        setIsSliding(true);
    };

    const stopSlide = () => {
        setIsSliding(false);
    };

    useEffect(() => {
        if (isSliding) {
            if(currImg === img.length) {
                setCurrImg(0);
            }
            const timer = setTimeout(() => {
                setCurrImg(currImg + 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    },[img.length, isSliding, currImg]);

    return (
        <div className={styles.slider}>
            <div className={styles.slider__img}>
                <img src={img[currImg]} alt="slider" />
            </div>
            <div className={`${styles.slider__btn} mt-5`}>
                <button onClick={() => startSlide()}>Slide</button>
                <button onClick={() => setCurrImg(currImg - 1)} disabled={currImg === 0}>Prev</button>
                <button onClick={() => setCurrImg(currImg + 1)} disabled={currImg === img.length - 1}>Next</button>
                <button onClick={() => stopSlide()}>stopSlide</button>
            </div>
        </div>
    );
}
