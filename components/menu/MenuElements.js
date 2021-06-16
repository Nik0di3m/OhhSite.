import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuWrapper = styled.div`
    position: relative;
    z-index: 999;
    max-width: 1530px;
    overflow: visible;
    background-color: #141414;
    color: white;
    @media (max-width: 992px) {
        position: fixed;
        margin-bottom: 50px;
    }
`;

export const MenuContainer = styled.nav`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 6px;
    justify-content: space-between;
    border-bottom: 1px solid #313131;
    -webkit-box-shadow: 0px 0px 15px 7px #000000;
    box-shadow: 0px 0px 15px 7px #000000;
`;

export const MenuLogo = styled.div``;

export const MenuHamburger = styled(motion.div)`
    color: white;
    display: flex;
`;

export const SideMenu = styled(motion.div)`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #141414;
    position: absolute;
    top: 0;
    z-index: 999;
    padding: 6px;
`;

export const CloseIconContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
export const MenuItemContainert = styled(motion.nav)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`;

export const MenuItem = styled(motion.div)`
    display: flex;
    flex: 0.1;
`;

export const MenuMobile = styled.div`
    @media (min-width: 992px) {
        display: none;
    }
`;

export const MenuContainerDesktop = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const MenuItemDesktop = styled.div`
    margin-left: 20px;
`;
export const MenuItemsContainerDesktop = styled.div`
    display: flex;
`;

export const MenuContainerDesktopWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #313131;
    -webkit-box-shadow: 0px 0px 15px 7px #000000;
    box-shadow: 0px 0px 15px 7px #000000;
    width: 100vw;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 0.33;
    justify-content: space-around;
`;

export const SocialIcon = styled.div`
    display: flex;
`;

export const MenuContainerDesktop2 = styled.div`
    display: flex;
    max-width: 1530px;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    padding: 6px;
`;
