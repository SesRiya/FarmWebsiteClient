import Modal from "./Modal";
import { CloseSign, Header, Message } from "./Modal.styles";
import React, { MouseEventHandler } from "react";

export interface ModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
  header?: string;
  message?: string;
  /*instead of passing children  we can use this to access content of login modal
  we can pass jsx to our node content via props
  usually children is used to add jsx content 
  two ways to pass jsx: via props(content) or via children*/
}

interface ComponentProps {
  ContainerComponent: React.ComponentType<{}>;
  CloseButtonComponent: React.ComponentType<{
    onClick?: MouseEventHandler<any>;
  }>;
}

interface Props extends ModalWrapperProps, ComponentProps {}

const ModalWrapper: React.FC<Props> = ({
  onBackDropClick,
  isModalVisible,
  header,
  message,
  children,
  ContainerComponent,
  CloseButtonComponent,
}) => {
  //if modal is not there return null dont render
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackDropClick={onBackDropClick}>
      <ContainerComponent>
        <CloseButtonComponent onClick={onBackDropClick}></CloseButtonComponent>
        <CloseSign />
        <Header>{header}</Header>
        {/*conditional rendering will only render if message is present and not null */}
        {message && <Message>{message}</Message>}
        {children}
      </ContainerComponent>
    </Modal>
  );
};

export default ModalWrapper;
