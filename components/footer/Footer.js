import {
    FooterContainer,
    LeftSideFooter,
    CenterFooter,
    RightSideFooter,
    CenterTitle,
    RightTitle,
    FooterItem,
    FooterContent,
    FooterCopy,
} from "./FooterElements";
import Image from "next/image";
const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LeftSideFooter>
                    <Image
                        src="/images/logo.svg"
                        alt="asdf"
                        width={250}
                        height={250}
                    />
                </LeftSideFooter>
                <CenterFooter>
                    <CenterTitle>O nas</CenterTitle>
                    <FooterItem>Współpraca</FooterItem>
                    <FooterItem>Realizacja</FooterItem>
                    <FooterItem>Cennik</FooterItem>
                    <FooterItem>
                        Usuługi dodatkowe
                    </FooterItem>
                </CenterFooter>
                <RightSideFooter>
                    <RightTitle>
                        Czym się zajmujemy?
                    </RightTitle>
                    <FooterItem>SEO</FooterItem>
                    <FooterItem>Grafika</FooterItem>
                    <FooterItem>
                        Projekty stron WWW
                    </FooterItem>
                    <FooterItem>
                        Reklama w internecie
                    </FooterItem>
                </RightSideFooter>
            </FooterContent>
            <FooterCopy>© OhhSite. 2021</FooterCopy>
        </FooterContainer>
    );
};

export default Footer;
