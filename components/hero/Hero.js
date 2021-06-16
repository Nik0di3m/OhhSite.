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
const Hero = () => {
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
                <HeroTextH1>Tworzymy</HeroTextH1>
                <HeroGradient>Strony</HeroGradient>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec ut semper ex.
                    Nulla viverra vehicula massa. In
                    fringilla enim nunc, sit amet tristique
                    orci interdum eu. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                    Suspendisse semper mi vitae ex
                    imperdiet, vel iaculis sapien bibendum.
                    Aliquam ut ultricies diam.
                </Text>
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
