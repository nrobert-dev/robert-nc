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

    return(
        <SCC.AboutMeWrapper ref={ref} triggered={inView} id='about'>
            <div style={{width : '100%',  display : 'flex', flexDirection : 'row', position : 'relative'}}>
                    <div style={{width : '50%', display : 'flex'}}>
                        <StaticImage
                            src="../../images/person.png"
                            width={500}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div style={{width : '50%'}}>
                        <SC.InfoHeaderWrapper>
                            <SC.SectionTitle> <span style={{color : DARK_THEME.text.main}}>00.</span> About Me<span>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
                        <div>           
                            <SC.SectionText>
                                <p>
                                    I am a <strong>Software Developer</strong> with over <strong>4 years</strong> of experience building various web applications, data analytics visualisations, 
                                    dashboards and component libraries for the web. 
                                </p>
                                <p>
                                    I am enthusiastic, hard-working and curious about the world around me. 
                                    I don't give up easily and I know where and how to look for solutions when problems arise. 
                                    I've always had a strong passion to create things and I constantly challenge myself to get better along the way.    
                                </p>    
                                <p>
                                    My professional experience:
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
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Development using React, Redux, NodeJS</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Handle front-end project deployments using Microsoft Azure</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Plan infrastructure and architecture for each project based on client's specs and requirements</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Perform regular code reviews and engage developers in the code review process</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Offer mentoring and support to team members and handle training of new joiners</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Lead the development on internal reusable tools and libraries</li>
                                                    <li><PanoramaFishEyeIcon fontSize='small'/>Internal tools back-end development</li>
                                                </SC.BulletList>
                                            </SC.TabContentWrapper>,
                                              <SC.TabContentWrapper>
                                              <SC.MainPosition>
                                                  @Toluna Corporate - Nov 2018 until July 2020
                                              </SC.MainPosition>
                                              <SC.BulletList>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/>Front-end development using React, Redux on dashboards, component libraries and internal tools</li>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/>Internal tools back-end development using : ASP.NET C# and Microsoft SQL </li>
                                                  <li><PanoramaFishEyeIcon fontSize='small'/>Full Stack development for various Toluna products</li>
      
                                              </SC.BulletList>
                                          </SC.TabContentWrapper>,
                                          <SC.TabContentWrapper>
                                             <SC.MainPosition>
                                                 @Other Work
                                             </SC.MainPosition>
                                             <SC.BulletList>
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
                    <SC.Rectangle width='40%' alignment='left'/>
                </div> 
                <SC.AnimationWrapper ref={refTech} triggered={inViewTech} direction='x'>
                        <SC.TechStackTitle>Technologies I work with 
                            <Tooltip 
                                title="If you're not a developer and don't know what these mean, don't worry. I can guide you through it. 
                                I always keep up to date with the latest tools and advancements in the industry so that your business or projects can have the best technology stack.">
                                <HelpIcon fontSize="small"/>
                            </Tooltip></SC.TechStackTitle>
                        {technologies.map(tech => <TechTag title={tech}/>)}
                </SC.AnimationWrapper>
        </SCC.AboutMeWrapper>
    )
};

export default AboutMe;