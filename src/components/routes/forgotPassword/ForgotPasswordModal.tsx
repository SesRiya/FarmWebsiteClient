import React, { useState } from "react";
import InputWithIcon from "../../Modal/InputWithIcon";
import { Button, ButtonContainer, ModalLink } from "../../Modal/Modal.styles";
import ResponsiveModal from "../../Modal/ResponsiveModal";
import { ReactComponent as LoginIcon } from "../../../assets/user.svg";
import { Link } from "react-router-dom";

interface ForgotPasswordProps {
  onClose: () => void;
  isModalVisible: boolean;
  onResetPasswordRequested: (login: string) => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordProps> = ({
  onClose,
  isModalVisible,
  onResetPasswordRequested,
}) => {
  const [login, setLogin] = useState("");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onResetPasswordRequested(login);
    }
  };

  const validate = (passwordRepeat: string, password: string) => {
    if (passwordRepeat !== password) {
      return false
    } else {
      return true;
    }
  }

  return (
    <ResponsiveModal
      onBackDropClick={onClose}
      header="Reset Password"
      isModalVisible={isModalVisible}
    >
      <>
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          icon={<LoginIcon width="24px" height="24px" fill="white" />}
        />
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onResetPasswordRequested(login)}>
            Reset password
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <ModalLink to="/login">Login</ModalLink>
          <ModalLink to="/register">Register</ModalLink>
        </ButtonContainer>
      </>
    </ResponsiveModal>
  );
};

export default ForgotPasswordModal;
