import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    ReallizacjeContainer,
    RealizacjeWrapper,
    RealizacjeTitle,
    RealizacjeImages,
    ImgaeOverlay,
    Overlay,
} from "./RealizacjeElements";
import Slider from "./Slider";
import Image from "next/image";
import Link from "next/link";
const Realizacje = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <ReallizacjeContainer>
            <RealizacjeWrapper>
                <RealizacjeTitle
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                >
                    Realizacje
                </RealizacjeTitle>
                <RealizacjeImages>
                    <Link href="https://as-rent.pl">
                        <a target="_blank">
                            <ImgaeOverlay>
                                <Image
                                    src="/images/as-rent.png"
                                    width="450"
                                    height="250"
                                />
                                <Overlay>
                                    <p>as-rent.pl</p>
                                </Overlay>
                            </ImgaeOverlay>
                        </a>
                    </Link>
                    <Link href="https://tas-bialystok.pl/">
                        <a target="_blank">
                            <ImgaeOverlay>
                                <Image
                                    src="/images/tas.png"
                                    width="450"
                                    height="250"
                                />
                                <Overlay>
                                    <p>tas-bialystok.pl</p>
                                </Overlay>
                            </ImgaeOverlay>
                        </a>
                    </Link>
                    <Link href="https://gingergarage.pl/">
                        <a target="_blank">
                            <ImgaeOverlay>
                                <Image
                                    src="/images/ginger.png"
                                    width="450"
                                    height="250"
                                />
                                <Overlay>
                                    <p>gingergarage.pl</p>
                                </Overlay>
                            </ImgaeOverlay>
                        </a>
                    </Link>
                </RealizacjeImages>
            </RealizacjeWrapper>
        </ReallizacjeContainer>
    );
};

export default Realizacje;
