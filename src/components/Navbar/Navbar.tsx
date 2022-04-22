import { useState } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../App.styles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  MenuItem,
  Menu,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./Navbar.styles";

const Navbar = () => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  ////modal login
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [loginError, setLoginError] = useState<string | undefined>()
  // const toggleModal = () => {
  //   setIsModalVisible((isModalVisible) => !isModalVisible);
  // };
  // const onBackDropClick = () => {
  //   setIsModalVisible(false);
  // };

  // const onLoginRequest: LoginFunction = async (args) => {
  //   try {
  //     const result = await loginUser(args);
  //     console.log(result);
  //   } catch (error) {
  //     setLoginError(JSON.stringify(error));
  //     console.log(JSON.stringify(error));
  //   }
  // };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        {" "}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              McDonald's Farm
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/products">
                  Products
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/recipes">
                  Recipes
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/courses">
                  Courses
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                <MenuLinkBtn to="/login">
                <Button primary bigRadius bigFont big >
                  Log in
                </Button>
                </MenuLinkBtn>
               
                {/* <LoginModal
                  onClose={onBackDropClick}
                  onLoginRequested={onLoginRequest}
                  isModalVisible={isModalVisible}
                  loginError={loginError}
                ></LoginModal> */}
                {/* </MenuLinkBtn> */}
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
