import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeImg,
  WelcomeContentText,
  WelcomeContentTitle,
  WelcomeText,
  Img,
} from "./Welcome.styles";
import VeggiesImg from "../../images/veggies.jpg";
const Welcome = () => {
  return (
    <div>
      <WelcomeContainer>
        <WelcomeContent>
          <WelcomeImg>
            <Img src={VeggiesImg} alt=" Veggies" />
          </WelcomeImg>
          <WelcomeContentText>
            <WelcomeContentTitle>Welcome</WelcomeContentTitle>
            <WelcomeText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </WelcomeText>
            <WelcomeText>
              Duis euismod imperdiet felis, non tempus nisi finibus ut. Cras
              tortor lorem, vehicula vitae feugiat vel, malesuada sit amet
              nulla. Nunc ullamcorper cursus neque id gravida.
            </WelcomeText>
          </WelcomeContentText>
        </WelcomeContent>
      </WelcomeContainer>
    </div>
  );
};

export default Welcome;
