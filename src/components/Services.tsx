import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
    return(
            <SC.ServicesSection id='services'>
                    <h2>I provide the following services</h2>
                    <SC.ServicesWrapper>
                        <SC.ServiceWrapper>
                            <StaticImage
                                src="../images/frontendimg.png"
                                width={400}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                            />
                            <h3>Front End Development</h3>
                            <p>I can help you build your <strong>dynamic, performant and modern web applications</strong> using the latest tools and technologies in the industry.</p>
                        </SC.ServiceWrapper>
                        <SC.ServiceWrapper>
                            <StaticImage
                                src="../images/backendservices.png"
                                width={400}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                            />
                            <h3>Back End Development</h3>
                            <p>Give a rock solid foundation to your app. I can work on creating various <strong>APIs</strong> for your services with <strong>database integration and authentication.</strong></p>
                        </SC.ServiceWrapper>
                        <SC.ServiceWrapper>
                            <StaticImage
                                src="../images/3dservicesimg.png"
                                width={400}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                            />
                            <h3>3D Modelling</h3>
                            <p>I can create beautiful and artistic <strong>renders</strong>, <strong>3D Models and Environment Design</strong> for video games, prints and other digital assets.</p>
                        </SC.ServiceWrapper>               
                    </SC.ServicesWrapper>
                </SC.ServicesSection>   
    )
};

export default Services;