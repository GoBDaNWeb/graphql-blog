// * react/next
import React from 'react'
import {useRouter} from 'next/router'
import {IPostsProps} from 'models/models'

// * styles 
import styles from './Category.module.scss'

// * components 
import Widget from 'components/common/Widget';
import PostItem from 'components/common/PostItem';

const Category: React.FC<IPostsProps> = ({posts}) => {
    return (
        <div className={styles.category}>
            <h2></h2>
            <div className={styles.postList}>
                {posts.map((post: any, index: number) => <PostItem key={index} post={post}/>)}
            </div>
            <Widget/>
        </div>
    )
}

export default Category