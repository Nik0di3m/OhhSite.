import { useEffect, useState } from "react";
import { SliderData } from "./ImageData";
import {
    SliderContainer,
    SliderItem,
} from "./SliderElements";
const Slider = () => {
    const [current, setCurrent] = useState(0);
    const slides = SliderData;
    const lenght = slides.length;

    const nextSlide = () => {
        setCurrent(
            current === lenght - 1 ? 0 : current + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 1500);
        return () => clearInterval(interval);
    });

    return (
        <SliderContainer onClick={nextSlide}>
            {SliderData.map((item, index) => {
                return (
                    <SliderItem key={index}>
                        {index === current && (
                            <img
                                src={item.image}
                                style={{ width: 900 }}
                            />
                        )}
                    </SliderItem>
                );
            })}
        </SliderContainer>
    );
};

export default Slider;
