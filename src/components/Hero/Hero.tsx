import Navbar from '../Navbar/Navbar';
import {Button} from '../../App.styles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroText,
    HeroBtn,

} from './Hero.styles';
import { Outlet } from 'react-router-dom';

const Hero = () =>{
    return(
        <div>
           <HeroContainer>
               <Navbar/>
               <HeroContent>
                   <HeroContentText>
                        <HeroTitle>
                            Organic Farm
                        </HeroTitle>
                        {/* <HeroSubTitle>For a longer Life</HeroSubTitle> */}
                        <HeroText>
                            Get a fresh and tasty recipes that are well balanced and 
                            will improve your wellness, plus add nutrients to your body.
                        </HeroText>
                        <HeroBtn to="/ask-us">
                           <Button primary big bigFont bigRadius>Ask us</Button>
                        </HeroBtn>
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
        </div>
    )
}


export default Hero