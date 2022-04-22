import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import {registerUser} from "../../../utils/AuthLogin";
import { AuthFunction } from "../../../utils/types";


const RegisterModalWrapper = () => {
  const [registerError, setRegisterError] = useState<string | undefined>();
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/");
  };

  const onRegisterRequested: AuthFunction = async(args) => {
    try {
        await registerUser(args)
      } catch (e) {
        setRegisterError(e as string)
      }
  }
  return (
    <RegisterModal
      isModalVisible={true}
      onClose={onClose}
      registerError={registerError}
      onRegisterRequested={onRegisterRequested}
    />
  );
};

export default RegisterModalWrapper;
