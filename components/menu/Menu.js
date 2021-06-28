import {
    CloseIconContainer,
    MenuContainer,
    MenuHamburger,
    MenuItem,
    MenuLogo,
    MenuWrapper,
    SideMenu,
    MenuItemContainert,
    MenuMobile,
    MenuItemDesktop,
    MenuItemsContainerDesktop,
    MenuContainerDesktop,
    MenuContainerDesktopWrapper,
    SocialIconsContainer,
    SocialIcon,
    MenuContainerDesktop2,
    PhoneContainer,
    SocialWrapper,
} from "./MenuElements";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import { useState } from "react";
const Menu = () => {
    const [active, setActive] = useState(false);
    const sidebarVariants = {
        hidden: {
            opacity: 0.5,
            left: "-100%",
        },
        visable: {
            opacity: 1,
            left: 0,
            display: "visable",
            transition: {
                delay: 0.2,
            },
        },
    };

    return (
        <MenuWrapper>
            <MenuMobile>
                <SideMenu
                    variants={sidebarVariants}
                    initial="hidden"
                    animate={`${
                        active ? "visable" : "hidden"
                    }`}
                >
                    <CloseIconContainer
                        onClick={() => {
                            setActive(!active);
                        }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <CloseIcon fontSize="large" />
                    </CloseIconContainer>
                    <MenuItemContainert>
                        <Link href="o-nas">
                            <MenuItem>O nas</MenuItem>
                        </Link>
                        <Link href="strony-www">
                            <MenuItem>Strony WWW</MenuItem>
                        </Link>
                        <Link href="pozycjonowanie">
                            <MenuItem>
                                Pozycjonowanie
                            </MenuItem>
                        </Link>
                        <Link href="kontakt">
                            <MenuItem>Kontakt</MenuItem>
                        </Link>
                        <Link href="realizacje">
                            <MenuItem>Realizacje</MenuItem>
                        </Link>
                        <Link href="dodatkowe-uslugi">
                            <MenuItem>
                                Dodatkowe usługi
                            </MenuItem>
                        </Link>
                    </MenuItemContainert>
                </SideMenu>
                <MenuContainer>
                    <MenuLogo>
                        <Link href="/">
                            <a>
                                <img src="images/logo.svg" />
                            </a>
                        </Link>
                    </MenuLogo>
                    <MenuHamburger
                        whileTap={{ scale: 1.5 }}
                    >
                        <MenuIcon
                            fontSize="large"
                            onClick={() =>
                                setActive(!active)
                            }
                        />
                    </MenuHamburger>
                </MenuContainer>
            </MenuMobile>
            <MenuContainerDesktopWrapper>
                <MenuContainerDesktop2>
                    <MenuContainerDesktop>
                        <MenuLogo>
                            <Link href="/">
                                <a>
                                    <img src="images/logo.svg" />
                                </a>
                            </Link>
                        </MenuLogo>
                        <MenuItemsContainerDesktop>
                            <MenuItemDesktop>
                                <Link href="o-nas">
                                    O nas
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="strony-www">
                                    Strony WWW
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="pozycjonowanie">
                                    Pozycjonowanie
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="kontakt">
                                    Kontakt
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="realizacje">
                                    Realizacje
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="dodatkowe-uslugi">
                                    Dodatkowe usługi
                                </Link>
                            </MenuItemDesktop>
                        </MenuItemsContainerDesktop>
                    </MenuContainerDesktop>
                    <SocialWrapper>
                        <SocialIconsContainer>
                            <SocialIcon>
                                <Link href="https://facebook.com">
                                    <a target="_blank">
                                        <img src="images/facebook.svg" />
                                    </a>
                                </Link>
                            </SocialIcon>
                            <SocialIcon>
                                <Link href="https://instagram.com">
                                    <a target="_blank">
                                        <img src="images/instagram.svg" />
                                    </a>
                                </Link>
                            </SocialIcon>
                        </SocialIconsContainer>
                        <PhoneContainer>
                            <a href="tel:+48987654321">
                                Tel: 987 654 321
                            </a>
                        </PhoneContainer>
                    </SocialWrapper>
                </MenuContainerDesktop2>
            </MenuContainerDesktopWrapper>
        </MenuWrapper>
    );
};

export default Menu;
