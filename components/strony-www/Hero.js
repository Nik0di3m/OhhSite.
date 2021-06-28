import Link from "next/link";
import {
    HeroContainer,
    HeroGradient,
    HeroLogo,
    HeroText,
    Text,
} from "./HeroElements";
const Hero = ({ title1, title2, text, image }) => {
    const textVariants = {
        hidden: {
            x: -1500,
        },
        visable: {
            x: 0,
            transition: {
                delay: 0.2,
                type: "spring",
            },
        },
    };
    return (
        <HeroContainer>
            <HeroText
                variants={textVariants}
                initial="hidden"
                animate="visable"
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <HeroGradient>{title2}</HeroGradient>
                </div>
                <Text>{text}</Text>
            </HeroText>
            <HeroLogo>
                <img src={image} />
            </HeroLogo>
        </HeroContainer>
    );
};

export default Hero;
