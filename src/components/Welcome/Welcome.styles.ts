import styled from 'styled-components';

export const WelcomeContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 50px;
margin-bottom: 20px;
`;

export const WelcomeContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;
@media only screen and (max-width:1000px) {
    flex-direction: column;
}
`;

export const WelcomeImg = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
`;

export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;
@media only screen and (min-width:300px) {
    width: 300px;
}
@media only screen and (min-width:400px) {
    width: 400px;
}
@media only screen and (min-width:600px) {
    width: 500px;
}
@media only screen and (min-width:800px) {
    width: 800px;
}
@media only screen and (min-width:1000px) {
    width: 500px;
    height: 400px;
}
@media only screen and (min-width:1200px) {
    width: 600px;
}
@media only screen and (min-width:1500px) {
    width: 750px;
}
@media only screen and (min-width:1800px) {
    width: 900px;
}
`;

export const WelcomeContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
@media only screen and (min-width:1200px) {
    padding: 30px 50px;
}
@media only screen and (min-width:1500px) {
    padding: 30px 70px;
}
`;

export const WelcomeContentTitle = styled.h2`
font-size: 38px;
font-weight: bold;
`;

export const WelcomeText = styled.p`
font-size: 18px;
&:not(:last-child) {
    margin-bottom: 2rem;
}
`;