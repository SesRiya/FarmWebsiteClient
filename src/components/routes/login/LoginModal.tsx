import React, { useState } from "react";
import InputWithIcon from "../../Modal/InputWithIcon";
import { Button, ButtonContainer, Error, ModalLink } from "../../Modal/Modal.styles";
import ResponsiveModal from "../../Modal/ResponsiveModal";
import { ReactComponent as LoginIcon } from "../../../assets/user.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/padlock.svg";
import { AuthFunction } from "../../../utils/types";

interface LoginModalProps {
  onClose: () => void;
  isModalVisible: boolean;
  loginError?: string;
  onLoginRequested: AuthFunction;
}

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  isModalVisible,
  loginError,
  onLoginRequested,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onLoginRequested({ login, password });
    }
  };

  return (
    <ResponsiveModal
      isModalVisible={isModalVisible}
      onBackDropClick={onClose}
      header="Login"
    >
      <>
        {/* <label htmlFor="login">Login</label> */}
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="enter your username"
          icon={<LoginIcon width="24px" height="24px" fill="white" />}
        />
        {/* <label htmlFor="password">Password</label> */}
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password"
          icon={<PasswordIcon width="24px" height="24px" fill="white" />}
        />
        {loginError && <Error>{loginError}</Error>}
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onLoginRequested({ password, login })}>
            Login
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <ModalLink to="/register">Register</ModalLink>
          <ModalLink to="/forgot_password">ForgotPassword</ModalLink>
        </ButtonContainer>
      </>
    </ResponsiveModal>
  );
};

export default LoginModal;
