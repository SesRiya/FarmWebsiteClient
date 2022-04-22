import {
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WorksIcon1,
    WorksIcon2,
    WorksIcon3,
    WorksCardTitle,
    WorksCardText
} from './Works.styles';


const Works = () => {
    return (
        <div>
            <WorksContent>
                <WorksContainer>
                    {/* <WorksTitle> How it works</WorksTitle> */}
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Design your garden</WorksCardTitle>
                            <WorksCardText>
                                There are different design for your garden. 
                                And we can customize it for you.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Order our Products</WorksCardTitle>
                            <WorksCardText>
                               We have your favourite native seeds. 
                     
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Enrol in our courses</WorksCardTitle>
                            <WorksCardText>
                               We provide courses for you to learn.
                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            
        </div>
    )
}

export default Works;