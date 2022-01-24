import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import {DARK_THEME, HELPFUL_URLS} from '../utils';
import TechTag from './TechTag';
import IosShare from '@mui/icons-material/IosShare';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useInView } from 'react-intersection-observer';
import gif from '../images/blog-gif.gif';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <SC.AnimationWrapper ref={ref} style={{margin : '100px 0px'}} triggered={inView} id='projects'>
                    <div style={{width : '100%',  display : 'flex'}}>
                                <SC.InfoHeaderWrapper style={{width : '50%', float : 'right'}}>
                                    <SC.SectionTitle> <span style={{color : DARK_THEME.text.main}}>03.</span> Projects<span>.</span></SC.SectionTitle>
                                    <SC.SectionHeaderDelimiterCircle/>
                                    <SC.SectionHeaderDelimiterLine/>
                                </SC.InfoHeaderWrapper>
                    </div>
                    <SC.ProjectsWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='600ms'>
                            <SC.ProjectWrapper>
                                <SC.DescriptionWrapper>
                                    <h4>Tech and Programming Blog</h4>
                                    <p>
                                        I've always wanted to share my ideas to the world so I had made myself a personal blog. An easy to use and read blog 
                                        using Firebase as a backend. Has features such as <strong>commenting, user accounts, dashboard and post creator for 
                                        admins.</strong>.
                                    </p>
                                    <p>
                                        Formely named <strong>Master of Some</strong>, the blog has been rebranded to fit under the subdomain of my personal website. 
                                    </p>

                                    <TechTag size='small' title='React'/>
                                    <TechTag size='small' title='Firebase'/>
                                    <TechTag size='small' title='Redux'/>
                                    <SC.VisitProject>
                                        <a href={HELPFUL_URLS.blog} target={'_blank'}>
                                            <IosShare/>
                                        </a>
                                        <a href={HELPFUL_URLS.github + 'thunderent-blog'} target='_blank'>
                                            <GitHubIcon/>
                                        </a>       
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper>
                                <SC.ProjectImageWrapper>
                                    <SC.ProjectImageGradient/>
                                    <img src={gif} alt='A gif of images showing the blog'/>
                                </SC.ProjectImageWrapper>         
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='1200ms'>
                            <SC.ProjectWrapper>
                                <SC.ProjectImageWrapper>
                                    <SC.ProjectImageGradient/>
                                    <img src={gif} 
                                        alt='A gif of images showing the blog'
                                        style={{
                                            borderRadius : '10px',
                                            boxShadow: 'rgba(0, 0, 0, 0.85) 0px 5px 15px',
                                            zIndex : 10,
                                            position : 'relative'
                                        }}
                                    />
                                </SC.ProjectImageWrapper>
                            
                                <SC.DescriptionWrapper>
                                    <h4>Pocket Pages</h4>
                                    <p>
                                        A web application for quickly creating simple, modular and fast websites. 
                                        Featuring a component based system, the website allows the creation of single page applications using various
                                        themes and styling options. Currently in development. 
                                    </p>
                                    <TechTag size='small' title='React'/>
                                    <TechTag size='small' title='Next.js'/>
                                    <TechTag size='small' title='Firebase'/>
                                    <SC.VisitProject>                                   
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper> 
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                    </SC.ProjectsWrapper>
        </SC.AnimationWrapper>
    )
};

export default Projects;