import React from 'react'
import { FooterBtn, FooterContainer, FooterCopyRight, FooterLabel, FooterLink, FooterLinkContainer, FooterLinks, FooterLinksWrapper, FooterLinkTitle, FooterNewsletter, FooterNewsletterForm, FooterNewsletterInput, FooterNewsletterText, FooterNewsletterTitle, FooterSection } from './Footer.styles'

const Footer = () => {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterNewsletter>
                        <FooterNewsletterTitle>Join our listing for execlusive discounts and new recipes</FooterNewsletterTitle>
                        <FooterNewsletterText>We create recipes and gardening tips monthly</FooterNewsletterText>
                        <FooterNewsletterForm>
                            <FooterLabel htmlFor="email">Email address</FooterLabel>
                           <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                           <FooterBtn>Submit</FooterBtn>
                        </FooterNewsletterForm>
                    </FooterNewsletter>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>Our Farm</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/about'>How it works</FooterLink>
                                <FooterLink to='/'>Orders</FooterLink>
                            </FooterLinks>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink to='/'>Recipes</FooterLink>
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'>Email</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                            </FooterLinks>
                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight > &copy; Copyright 2022</FooterCopyRight>
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}
export default Footer