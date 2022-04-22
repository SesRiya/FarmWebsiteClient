import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../utils/AuthLogin";
import ForgotPasswordModal from "./ForgotPasswordModal";

const ForgotPasswordModalWrapper = () => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/");
  };
  const onResetPasswordRequested = async (login: string) => {
    await forgotPassword(login);
  };
  return (
    <ForgotPasswordModal
    isModalVisible={true}
      onClose={onClose}
      onResetPasswordRequested={onResetPasswordRequested}
    />
  );
};

export default ForgotPasswordModalWrapper;
