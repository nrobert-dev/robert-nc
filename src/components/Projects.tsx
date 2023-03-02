import React from 'react';
import * as SC from "./Index.styles";
import {DARK_THEME, HELPFUL_URLS} from '../utils';
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
        <SC.AnimationWrapper ref={ref} style={{margin : '100px 0px'}} triggered={inView} id='projects'>
                    <SC.WritingTitleWrapper >
                                <SC.InfoHeaderWrapper style={{float : 'right'}}>
                                    <SC.SectionTitle> <span style={{color : DARK_THEME.text.main}}>03.</span> Projects<span>.</span></SC.SectionTitle>
                                    <SC.SectionHeaderDelimiterCircle/>
                                    <SC.SectionHeaderDelimiterLine/>
                                </SC.InfoHeaderWrapper>
                    </SC.WritingTitleWrapper>
                    <SC.ProjectsWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='600ms'>
                            <SC.ProjectWrapper>
                                <SC.DescriptionWrapper>
                                    <h4>Nootify API</h4>
                                    <p>
                                        A lightweight notification service and API. Currently released in Alpha version.
                                    </p>
                                    <p>
                                        Nootify is a notification managing service intended for developers.
                                        It allows you to easily connect your web, mobile or desktop applications to a central notification managing system.
                                        Notifications are small, character-limited messages that are sent from the service to the connected clients.
                                    </p>
                                    <TechTag size='small' title='React'/>
                                    <TechTag size='small' title='Node.js'/>
                                    <TechTag size='small' title='Mongo'/>
                                    <SC.VisitProject>
                                        <a href={HELPFUL_URLS.nootify} target={'_blank'}>
                                            <IosShare/>
                                        </a>
                                    </SC.VisitProject>
                                    <SC.VisitProject>
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper>
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='1200ms'>
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
             
                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                        <SC.AnimationWrapper triggered={inView} direction='x' delay='1800ms'>
                            <SC.ProjectWrapper>
                                <SC.DescriptionWrapper>
                                    <h4>Dream of Me - Escape Room Game</h4>
                                    <p>
                                        A first-person adventure game built in Unity. I created all the assets and programming myself. The project was intended to be released
                                        as a full game but due to personal reasons it had to stay in a demo state.
                                    </p>
                                    <p>
                                        The game received quite good feedback from the community, with lots of positive comments and even gameplay videos from various Youtube creators.
                                    </p>

                                    <TechTag size='small' title='Unity'/>
                                    <TechTag size='small' title='C#'/>
                                    <TechTag size='small' title='Blender'/>
                                    <SC.VisitProject>
                                        <a href={'https://thunderent.itch.io/dream-of-me'} target={'_blank'}>
                                            <IosShare/>
                                        </a>
                                    </SC.VisitProject>
                                </SC.DescriptionWrapper>

                            </SC.ProjectWrapper>
                        </SC.AnimationWrapper>
                    </SC.ProjectsWrapper>
        </SC.AnimationWrapper>
    )
};

export default Projects;