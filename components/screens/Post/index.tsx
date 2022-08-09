// * react/next 
import React from 'react'
import {IPostProps} from 'models/models'

// * styles
import styles from './Post.module.scss'

// * components 
import PostDetail from './PostDetail'
import AuthorCard from './AuthorCard'
import CommentForm from './CommentForm'
import Comments from './Comments'

const Post: React.FC<IPostProps> = ({post}) => {
    
    console.log(post)
    return (
        <div className={styles.post}>
           <PostDetail post={post}/>
           <AuthorCard author={post.author}/>
           <CommentForm slug={post.slug}/>
           <Comments slug={post.slug}/>
        </div>
    )
}

export default Post