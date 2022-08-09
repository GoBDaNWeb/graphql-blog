// * react/next
import React from 'react' 
import Head from 'next/head'
import {IPostsProps} from 'models/models'

// * componenats
import PostItem from 'components/common/PostItem'
import Widget from 'components/common/Widget'
import styles from './Main.module.scss'

const Main: React.FC<IPostsProps> = ({posts}) => {
	return (
		<div>
			<Head>
				<title>Graph Blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <div className={styles.main}>
                <div className={styles.postList}>
                    {posts.map((post: any, index: number) => <PostItem key={index} post={post}/>)}
                </div>
                <Widget/>
            </div>
		</div>
	)
}

export default Main