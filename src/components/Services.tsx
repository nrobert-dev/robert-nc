import React from 'react';
import * as SC from "./Index.styles";
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
    return(
            <SC.ServicesSection>
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
                            <h3>Front End Dev</h3>
                            <p>I can help you build your dynamic, performant and modern web applications using the latest tools and technologies in the industry.</p>
                        </SC.ServiceWrapper>
                        <SC.ServiceWrapper>
                            <StaticImage
                                src="../images/backendservices.png"
                                width={400}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                            />
                            <h3>Frontf End Dev</h3>
                            <p>I can help you build your dynamic, performant and modern web applications using the latest tools and technologies in the industry.</p>
                        </SC.ServiceWrapper>
                        <SC.ServiceWrapper>
                            <StaticImage
                                src="../images/3dservicesimg.png"
                                width={400}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                            />
                            <h3>Front End Dev</h3>
                            <p>I can help you build your dynamic, performant and modern web applications using the latest tools and technologies in the industry.</p>
                        </SC.ServiceWrapper>               
                    </SC.ServicesWrapper>
                </SC.ServicesSection>   
    )
};

export default Services;