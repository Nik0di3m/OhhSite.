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
                        <MenuItem>O nas</MenuItem>
                        <MenuItem>Grafika</MenuItem>
                        <MenuItem>Cennik</MenuItem>
                        <MenuItem>Kontakt</MenuItem>
                        <MenuItem>Realizacje</MenuItem>
                        <MenuItem>
                            Dodatkowe usługi
                        </MenuItem>
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
                                O nas
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                Grafika
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                Cennik
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                Kontakt
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                Realizacje
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                Dodatkowe usługi
                            </MenuItemDesktop>
                        </MenuItemsContainerDesktop>
                    </MenuContainerDesktop>
                    <SocialIconsContainer>
                        <SocialIcon>
                            <img src="images/facebook.svg" />
                        </SocialIcon>
                        <SocialIcon>
                            <img src="images/instagram.svg" />
                        </SocialIcon>
                        <SocialIcon>
                            <img src="images/pinterest.svg" />
                        </SocialIcon>
                    </SocialIconsContainer>
                </MenuContainerDesktop2>
            </MenuContainerDesktopWrapper>
        </MenuWrapper>
    );
};

export default Menu;
