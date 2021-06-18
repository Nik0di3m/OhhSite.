import {
    FourContainer,
    FourH1,
    FourButton,
} from "./404containerElements";
import Link from "next/link";
const FourOfFour = () => {
    return (
        <FourContainer>
            <FourH1>Oopss.. Coś poszło nie tak :(</FourH1>
            <Link href="/">
                <FourButton>Wracam!</FourButton>
            </Link>
        </FourContainer>
    );
};

export default FourOfFour;
