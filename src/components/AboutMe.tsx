import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"
import {THEME} from '../utils';
import Tabs from "./Tabs";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TechTag from './TechTag';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const technologies : string[] = [
    "Typescript",
    "React",
    "Redux",
    "Redux-Saga",
    "D3",
    "Vue",
    "Webpack",
    "NodeJS",
    ".NET",
    "MongoDB",
    "Firebase",
    "Microsoft SQL"
]
const AboutMe = () => {
    return(
        <div style={{margin : '200px 0px'}}>
            <div style={{width : '100%',  display : 'flex', flexDirection : 'row', position : 'relative'}}>
                    <div style={{width : '50%', display : 'flex'}}>
                        <StaticImage
                            src="../images/person.png"
                            width={600}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div style={{width : '50%'}}>
                        <SC.InfoHeaderWrapper>
                            <SC.SectionTitle> <span style={{color : THEME.text.main}}>00.</span> About Me<span style={{color : THEME.secondary}}>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
                        <div>
                            <SC.SectionText>
                                 <p>
                                 I am a software developer with over 4 years of experience building various web applications, data analytics visualisations, 
                                 dashboards and component libraries for the web. 
                                 This variety has taught me a few tips and tricks that I can use to improve the web experience. 
                                 </p>
                                 <p>
                                 Lorem ipsum dolor sit amet. Habemus igitur nos adios guru tamas lego mego ergo situ sum bar.
                                 My experience is within the following:            
                                 </p>                                                     
                            </SC.SectionText>
                            <Tabs tabs={["@Technical Lead", "@Full Stack Developer", "@Others"]}
                                tabChildren={
                                    [
                                        <SC.TabContentWrapper>
                                            <SC.MainPosition>
                                                @Toluna Corporate - Current
                                            </SC.MainPosition>
                                            <SC.BulletList>
                                                <li><PanoramaFishEyeIcon fontSize='small'/>Development using React and Redux</li>
                                                <li><PanoramaFishEyeIcon fontSize='small'/>Development using React and Redux</li>
                                                <li><PanoramaFishEyeIcon fontSize='small'/>Development using React and Redux</li>
                                                <li><PanoramaFishEyeIcon fontSize='small'/>Development using React and Redux</li>
                                                
                                            </SC.BulletList>
                                        </SC.TabContentWrapper>,
                                        <span>2</span>,
                                        <span>3</span>            
                                    ]
                                }/>
                          
                        </div>
                    </div>
                    <SC.Rectangle width='40%' alignment='left'/>
                </div> 
                <div>
                        <SC.TechStackTitle>Technologies I work with 
                            <Tooltip 
                                title="If you're not a developer and don't know what these mean, don't worry. I can guide you through it. 
                                I always keep up to date with the latest tools and advancements in the industry so that your business or projects can have the best technology stack.">
                                <HelpIcon fontSize="small"/>
                            </Tooltip></SC.TechStackTitle>
                        {technologies.map(tech => <TechTag title={tech}/>)}
                </div>
        </div>
    )
};

export default AboutMe;