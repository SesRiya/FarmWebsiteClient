import React, { useState } from "react";
import { AuthFunction } from "../../../utils/types";
import InputWithIcon from "../../Modal/InputWithIcon";
import { Button, ButtonContainer, Error, ModalLink } from "../../Modal/Modal.styles";
import ResponsiveModal from "../../Modal/ResponsiveModal";
import { ReactComponent as LoginIcon } from "../../../assets/user.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/padlock.svg";
import { Link } from "react-router-dom";

interface RegisterModalProps {
  onClose: () => void;
  isModalVisible: boolean;
  registerError?: string;
  onRegisterRequested: AuthFunction;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onClose,
  isModalVisible,
  registerError,
  onRegisterRequested,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [localRegisterError, setLocalRegisterError] = useState<
    string | undefined
  >();

  const validate = (password: string, passwordRepeat: string) => {
    if (password !== passwordRepeat) {
      return false;
    } else {
      return true;
    }
  };

  const onRegisterTrigger = () => {
    if (validate(password, passwordRepeat)) {
      onRegisterRequested({ password, login });
    } else {
      setLocalRegisterError("Password entries must match");
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onRegisterTrigger();
    }
  };

  return (
    <ResponsiveModal
      isModalVisible={isModalVisible}
      onBackDropClick={onClose}
      header="Register"
    >
      <>
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="enter your name"
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
        {/* <label htmlFor="password" style={{fontSize: "16px"}}>Repeat Password</label> */}
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          type="password"
          placeholder="enter your password again"
          icon={<PasswordIcon width="24px" height="24px" fill="white" />}
        />
        {/* error from api or from password not matching */}
        {registerError && <Error>{registerError}</Error>}
        {localRegisterError && <Error>{localRegisterError}</Error>}
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onRegisterTrigger}>Register</Button>
        </ButtonContainer>
        <ButtonContainer>
          <ModalLink to="/login">Login</ModalLink>
          <ModalLink to="/forgot_password">Forgot Password</ModalLink>
        </ButtonContainer>
      </>
    </ResponsiveModal>
  );
};

export default RegisterModal;
