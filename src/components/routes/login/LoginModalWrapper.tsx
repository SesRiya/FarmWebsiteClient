import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthFunction } from "../../../utils/types";
import {loginUser} from "../../../utils/AuthLogin";
import LoginModal from "./LoginModal";



const LoginModalWrapper = () => {
  const[loginError, setLoginError] = useState<string | undefined>();
    
  const navigate = useNavigate();
  const onClose = () => navigate("/");

    const onLoginRequest: AuthFunction = async (args) => {
    try {
      const result = await loginUser(args);
      console.log(result);
    } catch (error) {
      setLoginError(error as string);
      console.log(JSON.stringify(error));
    }
  };


  return (
    <LoginModal
      isModalVisible={true}
      onClose={onClose}
      onLoginRequested={onLoginRequest}
      loginError = {loginError}
    />
  );
};

export default LoginModalWrapper;
