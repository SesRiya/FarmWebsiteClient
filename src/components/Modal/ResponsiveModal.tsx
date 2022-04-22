import React from "react";
//using mediaquery
import MediaQuery from "react-responsive";
import {
  DesktopCloseButton,
  DesktopModalContainer,
  MobileCloseButton,
  MobileModalContainer,
} from "./Modal.styles";
import ModalWrapper, { ModalWrapperProps } from "./ModalWrapper";

// extends ModalWrapperProps then assigned as {...props} so not to declare all props needed
interface RWDModalProps extends ModalWrapperProps {}

const RWDModal: React.FC<RWDModalProps> = (props) => {
  return (
    <MediaQuery minWidth={580}>
      {(matches: any) =>
        matches ? (
          <ModalWrapper
            CloseButtonComponent={DesktopCloseButton}
            ContainerComponent={DesktopModalContainer}
            {...props}
          />
        ) : (
          <ModalWrapper
            CloseButtonComponent={MobileCloseButton}
            ContainerComponent={MobileModalContainer}
            {...props}
          />
        )
      }
    </MediaQuery>
  );
};

export default RWDModal;
