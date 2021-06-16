import Link from "next/link";
import {
    HeroButton,
    HeroButtonContainer,
    HeroContainer,
    HeroGradient,
    HeroLogo,
    HeroText,
    HeroTextH1,
    Text,
} from "./HeroElements";
const Hero = ({ title1, title2, text }) => {
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
                <HeroTextH1>{title1}</HeroTextH1>
                <HeroGradient>{title2}</HeroGradient>
                <Text>{text}</Text>
                <HeroButtonContainer>
                    <HeroButton>
                        <Link href="o-nas">O nas</Link>
                    </HeroButton>
                    <HeroButton
                        style={{ marginLeft: "15px" }}
                    >
                        <Link href="realizacje">
                            Nasze realizacje
                        </Link>
                    </HeroButton>
                </HeroButtonContainer>
            </HeroText>
            <HeroLogo>
                <img src="images/logoHero.svg" />
            </HeroLogo>
        </HeroContainer>
    );
};

export default Hero;
