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
    CompanyInfo,
} from "./FooterElements";
import Image from "next/image";
import Link from "next/link";
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
                    <FooterItem>
                        <Link href="wspolpraca">
                            Współpraca
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="realizacje">
                            Realizacje
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="cennik">Cennik</Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="uslugi-dodatkowe">
                            Usługi dodatkowe
                        </Link>
                    </FooterItem>
                </CenterFooter>
                <RightSideFooter>
                    <RightTitle>
                        Czym się zajmujemy?
                    </RightTitle>
                    <FooterItem>
                        <Link href="seo">SEO</Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="grafika">Grafika</Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="strony-www">
                            Projektowanie stron
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link href="pozycjonowanie">
                            Reklama w internecie
                        </Link>
                    </FooterItem>
                </RightSideFooter>
                <CompanyInfo>
                    Clever Way Martyna Prybicho <br />
                    NIP: 9662148901 <br />
                    Adres: ul. Jesiennych Liści 81, 16-070
                    <br />
                    Porosły, Polska
                </CompanyInfo>
            </FooterContent>
            <FooterCopy>© OhhSite. 2021</FooterCopy>
        </FooterContainer>
    );
};

export default Footer;
