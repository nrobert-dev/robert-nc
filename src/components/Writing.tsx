import React, { useEffect, useState} from 'react';
import * as SC from "./Index.styles";
import {DARK_THEME, HELPFUL_URLS} from '../utils';
import Article from "../components/Article";
import { useInView } from 'react-intersection-observer';
import firebase from "gatsby-plugin-firebase";


interface Post {
    title : string,
    description : string,
    id : string,
    tag : string
}

const Writing = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    useEffect(() => {
        let blogPosts : Post[] = [];
        firebase.firestore().collection("posts").orderBy("date","desc").get().then(function(querySnapshot : any) {
            querySnapshot.forEach(function(doc : any) {
                const data = doc.data();
                blogPosts.push({
                    title : data.title,
                    description : data.description,
                    id : doc.id,
                    tag : data.tag
                })
            });
            setPosts(blogPosts.slice(0,4));

        }).catch((error : any) => {
            console.log(error);
        });
    },[]);

    return(
        <SC.AnimationWrapper ref={ref} triggered={inView} style={{margin : '200px 0px'}} direction='x' id='blog'>
            <SC.WritingTitleWrapper>
                        <SC.InfoHeaderWrapper style={{float : 'right'}}>
                            <SC.SectionTitle> <span style={{color : DARK_THEME.text.main}}>02.</span> Latest Posts<span>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
            </SC.WritingTitleWrapper>
            <SC.ArticlesWrapper>
                    {posts.length === 0 ? <p>Oops, something went wrong and no data could be loaded.</p> : null}
                    {posts.map((post : Post,index : number) =>    
                    <SC.AnimationWrapper triggered={inView} delay={100*(index+2)+'ms'}>
                        <Article tag={post.tag}
                            url={HELPFUL_URLS.blog+'article/'+post.id}
                            title={post.title}
                            description={post.description}/>
                    </SC.AnimationWrapper>)}
            </SC.ArticlesWrapper>
            <SC.MoreLink> <a href={HELPFUL_URLS.blog} target={'_blank'}>See More >></a></SC.MoreLink>
        </SC.AnimationWrapper>
    )
};

export default Writing;