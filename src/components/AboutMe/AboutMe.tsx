import React from 'react';
import * as SC from "../Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import {DARK_THEME} from '../../utils';
import Tabs from "../Tabs";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TechTag from '../TechTag';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import * as SCC from './AboutMe.styles';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../../hooks';
import CustomTooltip from "../CustomTooltip";

const technologies : string[] = [
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "Redux-Saga",
    "D3",
    "Webpack",
    "NodeJS",
    ".NET",
    "MongoDB",
    "Firebase",
    "Microsoft SQL"
]
const AboutMe = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px 0px',
    });

    const [refText, inViewText] = useInView({
        triggerOnce: true,
        rootMargin: '-140px 0px',
    });

    const [refTech, inViewTech] = useInView({
        triggerOnce: true,
        rootMargin: '-190px 0px',
    });

    const {width} = useWindowSize();

    return(
        <SCC.AboutMeWrapper ref={ref} triggered={inView} id='about'>
            <SCC.AboutMeContaienr>
                    <div className='about-me-image' style={{display : 'flex'}}>
                        <StaticImage
                            src="../../images/person.png"
                            width={500}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div className='about-me-text'>
                        <SC.InfoHeaderWrapper style={{width : '100%'}}>
                            <SC.SectionTitle> <span style={{color : DARK_THEME.text.main}}>00.</span> About Me<span>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
                        <div>           
                            <SC.SectionText>
                                <p>
                                    I am a <strong>Software Developer</strong> with over <strong>4 years</strong> of experience building cool stuff for the web.
                                </p>
                                <p>
                                    So far I have worked and helped build <strong>web apps, data visualisations, dashboards, mobile apps and games!</strong>
                                </p>
                                <p>
                                    I've always had a strong passion to create and develop beautiful experiences for people. My experiences across
                                    multiple domains (games, web and mobile) helped me develop strong problem solving skills ready to be put to use for <strong>YOUR</strong> project.
                                </p>    
                                <p>
                                    Here's a summary of my <strong>professional experience</strong>:
                                </p>                                                 
                            </SC.SectionText>
                        
                            <SC.AnimationWrapper style={{height : '350px'}} triggered={inViewText} ref={refText}>
                                <Tabs tabs={["@Technical Lead", "@Full Stack Developer", "@Others"]}
                                    tabChildren={
                                        [
                                            <SC.TabContentWrapper>
                                                <SC.MainPosition>
                                                    @Toluna Corporate - Current
                                                </SC.MainPosition>
                                                <SC.BulletList>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/><span>Development using <strong>React, Redux, NodeJS</strong></span></li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/><span>Handle front-end project deployments using  <strong>Microsoft Azure</strong></span></li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/><span>Plan <strong>front-end infrastructure and architecture</strong> for each project based on client's specs and requirements</span></li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/><span>Perform regular <strong>code reviews</strong> and engage developers in the code review process</span></li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Offer mentoring and support to team members and handle training of new joiners</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Lead the development on internal reusable tools and libraries</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/><span>Internal tools <strong>back-end development</strong></span></li>
                                                </SC.BulletList>
                                            </SC.TabContentWrapper>,
                                              <SC.TabContentWrapper>
                                              <SC.MainPosition>
                                                  @Toluna Corporate - Nov 2018 until July 2020
                                              </SC.MainPosition>
                                              <SC.BulletList>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/><span>Front-end development using <strong>React, Redux</strong> on dashboards, component libraries and internal tools</span></li>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/><span>Internal tools back-end development using : <strong>ASP.NET C# and Microsoft SQL</strong></span></li>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/><span></span>Full Stack development for various Toluna products</li>
      
                                              </SC.BulletList>
                                          </SC.TabContentWrapper>,
                                          <SC.TabContentWrapper>
                                             <SC.MainPosition>
                                                 @Other Work
                                             </SC.MainPosition>
                                             <SC.BulletList>
                                             <li><PanoramaFishEyeIcon fontSize='small'/><span><strong>Bachelor's Degree in Computer Science</strong></span></li>
                                                 <li><PanoramaFishEyeIcon fontSize='small'/>Internship at Nokia where I helped develop an internal mailing system based on events</li>
                                                 <li><PanoramaFishEyeIcon fontSize='small'/>Internship at Haufe Group where I helped develop a mobile application for keeping track of meeting room availability</li>
                                                 <li><PanoramaFishEyeIcon fontSize='small'/>Freelancer offering 3D modelling services for various video games</li>
                                                 <li><PanoramaFishEyeIcon fontSize='small'/>Worked as a 3D Artist for a mobile game, <SC.Hyperlink href='https://play.google.com/store/apps/details?id=com.twotwou.MerchantRun&hl=ro&gl=US'> Merchant Run</SC.Hyperlink> </li>
                                                 <li><PanoramaFishEyeIcon fontSize='small'/>Indie game developer for  <SC.Hyperlink href='https://thunderent.itch.io/dream-of-me'> Dream of Me</SC.Hyperlink> </li>
                                             </SC.BulletList>
                                         </SC.TabContentWrapper>            
                                        ]
                                    }/>
                            </SC.AnimationWrapper>
                          
                        </div>
                    </div>
                    {width && width > 1200 && <SC.Rectangle width='40%' alignment='left'/>}
                </SCC.AboutMeContaienr> 
                <SC.AnimationWrapper ref={refTech} triggered={inViewTech} direction='x'>
                        <SCC.TechTagResponsiveWrapper>
                            <SC.TechStackTitle>Technologies I work with 
                            <CustomTooltip 
                                title="If you're not a developer and don't know what these mean, don't worry. I can guide you through it. 
                                I always keep up to date with the latest tools and advancements in the industry so that your business or projects can have the best technology stack.">
                                <HelpIcon fontSize="small"/>
                            </CustomTooltip></SC.TechStackTitle>
                            {technologies.map(tech => <TechTag title={tech}/>)}
                        </SCC.TechTagResponsiveWrapper>           
                </SC.AnimationWrapper>
        </SCC.AboutMeWrapper>
    )
};

export default AboutMe;