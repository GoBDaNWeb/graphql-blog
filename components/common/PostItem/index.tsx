// * react/next
import React from 'react'
import {useRouter} from 'next/router'
import {IPost} from 'models/models'

// * styles
import styles from './PostItem.module.scss'
import moment from 'moment';

const PostItem: React.FC<IPost> = ({post}) => {
    const router = useRouter()
    return (
        <div className={styles.postItem}>
            <div 
                onClick={() => router.push(`/post/${post.slug}`)}
                className={styles.imageWrapper}
            >
                <img 
                    className={styles.image}
                    src={post.node.featuredImage.url} 
                    alt="Post Image"
                />
            </div>
            <div className={styles.content}>
                <h3>{post.node.title}</h3>
                <div className={styles.info}>
                    <div className={styles.author}>
                        <img 
                            className={styles.avatar}
                            src={post.node.author.photo.url}
                            alt="Avatar"
                        />
                        <h5>
                            {post.node.author.name}
                        </h5>
                    </div>
                    <div>
                        {moment(post.node.createdAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                <div className={styles.exerpt}>
                    {post.exerpt}
                </div>
            </div>
        </div>
    )
}

export default PostItem