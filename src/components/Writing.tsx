import React, { useEffect, useState} from 'react';
import * as SC from "./Index.styles";
import {THEME} from '../utils';
import Article from "../components/Article";
import { useInView } from 'react-intersection-observer';
import firebase from "gatsby-plugin-firebase";

interface Post {
    title : string,
    description : string,
    id : string
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
                    id : doc.id
                })
            });  
            
            setPosts(blogPosts.slice(0,4));  
        }).catch((error : any) => {
            console.log(error);
        });
    },[]);

    console.log(posts);

    return(
        <SC.AnimationWrapper ref={ref} triggered={inView} style={{margin : '200px 0px'}} direction='x'>
            <div style={{width : '100%',  display : 'flex', justifyContent : 'flex-end'}}>
                        <SC.InfoHeaderWrapper style={{width : '50%', float : 'right'}}>
                            <SC.SectionTitle> <span style={{color : THEME.text.main}}>02.</span> Latest Posts<span>.</span></SC.SectionTitle>
                            <SC.SectionHeaderDelimiterCircle/>
                            <SC.SectionHeaderDelimiterLine/>
                        </SC.InfoHeaderWrapper>
            </div>
            <SC.ArticlesWrapper>
                    {posts.map((post : Post,index : number) =>    
                    <SC.AnimationWrapper triggered={inView} delay={100*(index+2)+'ms'}>
                        <Article tag="CASH" 
                            title={post.title}
                            description={post.description}/>
                    </SC.AnimationWrapper>)}
            </SC.ArticlesWrapper>
        </SC.AnimationWrapper>
    )
};

export default Writing;