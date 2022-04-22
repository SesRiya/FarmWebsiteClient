import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: #818c4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
  border-radius: 7px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 400px;
  font-size: 20px;
`;

export const MobileModalContainer = styled(ModalContainer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16px;
  min-height: 200px;
  font-size: 20px;
`;

export const ModalLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #aaa;
  &:hover {
    color: black;
    background-color: white;
    border-color: white;
  }
`;

export const Header = styled.h3`
  color: white;
  font-size: 25px;
  line-height: 1em;
  font-weight: 300;
  margin: 5px 0 10px;
  text-align: center;
`;

export const Message = styled.p`
  color: #aaa;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 36px;
  text-align: center;
`;

const CLOSE_BUTTON_SIZE = 40;

export const CloseSign = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #323232;
  &:before,
  &:after {
    position: absolute;
    left: 400px;
    top: -10px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  width: ${CLOSE_BUTTON_SIZE}px;
  height: ${CLOSE_BUTTON_SIZE}px;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;

export const DesktopCloseButton = styled(CloseButton)`
  top: -${CLOSE_BUTTON_SIZE / 2}px;
  left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);
`;

export const MobileCloseButton = styled(CloseButton)`
  top: -${CLOSE_BUTTON_SIZE / 2}px;
  left: calc(100% - ${CLOSE_BUTTON_SIZE * 1.5 + 10}px);
`;

export const ButtonContainer = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: 3px solid #e38b06;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 3px 3px;
  background-color: #e38b06;
  &:hover {
    color: black;
    background-color: white;
    border-color: white;
  }
`;

export const Error = styled.div`
  padding: 16px 0;
  font-size: 16px;
  color: red;
`;
