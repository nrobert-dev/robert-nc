import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import {THEME} from '../utils';
import TechTag from './TechTag';
import IosShare from '@mui/icons-material/IosShare';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <SC.AnimationWrapper ref={ref} style={{margin : '100px 0px'}} triggered={inView}>
                    <div style={{width : '100%',  display : 'flex'}}>
                                <SC.InfoHeaderWrapper style={{width : '50%', float : 'right'}}>
                                    <SC.SectionTitle> <span style={{color : THEME.text.main}}>03.</span> Projects<span style={{color : THEME.secondary}}>.</span></SC.SectionTitle>
                                    <SC.SectionHeaderDelimiterCircle/>
                                    <SC.SectionHeaderDelimiterLine/>
                                </SC.InfoHeaderWrapper>
                    </div>
                    <SC.ProjectsWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='600ms'>
                            <SC.ProjectWrapper>
                                <SC.DescriptionWrapper>
                                    <h4>Pocket Pages</h4>
                                    <p>
                                        A web application for creating cool tiny websites. 
                                        Featuring a component based system the website allows quick creation of various landing pages. 
                                        It has various themes, styling options. Very easy to use. I don’t know what to write more, I hope this is enough.
                                    </p>
                                    <TechTag size='small' title='React'/>
                                    <TechTag size='small' title='Firebase'/>
                                    <TechTag size='small' title='Redux'/>
                                    <SC.VisitProject>
                                        <IosShare/>
                                        <GitHubIcon/>
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper>
                                <SC.ProjectImageWrapper>
                                    <SC.ProjectImageGradient/>
                                    <StaticImage
                                        src="../images/web.png"
                                        width={700}
                                        quality={95}
                                        key='boss'
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"
                                        style={{
                                            borderRadius : '10px',
                                            zIndex : 10
                                        }}
                                    />
                                </SC.ProjectImageWrapper>         
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='1200ms'>
                            <SC.ProjectWrapper>
                                <SC.ProjectImageWrapper>
                                    <SC.ProjectImageGradient/>
                                    <StaticImage
                                        src="../images/web.png"
                                        width={700}
                                        quality={95}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"
                                        style={{
                                            borderRadius : '10px',
                                            boxShadow: 'rgba(0, 0, 0, 0.85) 0px 5px 15px',
                                            zIndex : 10
                                        }}
                                    />
                                </SC.ProjectImageWrapper>
                            
                                <SC.DescriptionWrapper>
                                    <h4>Pocket Pages</h4>
                                    <p>
                                        A web application for creating cool tiny websites. 
                                        Featuring a component based system the website allows quick creation of various landing pages. 
                                        It has various themes, styling options. Very easy to use. I don’t know what to write more, I hope this is enough.
                                    </p>
                                    <TechTag size='small' title='React'/>
                                    <TechTag size='small' title='Firebase'/>
                                    <TechTag size='small' title='Redux'/>
                                    <SC.VisitProject>
                                        <IosShare/>
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper> 
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                    </SC.ProjectsWrapper>
        </SC.AnimationWrapper>
    )
};

export default Projects;