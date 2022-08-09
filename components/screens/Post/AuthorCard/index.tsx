// * react
import React from 'react'
import {IAuthorProps} from 'models/models'

// * styles 
import styles from './AuthorCard.module.scss'

const AuthorCard: React.FC<IAuthorProps> = ({author}) => {
    return (
        <div className={styles.authorCard}>
            <img 
                className={styles.avatar}
                src={author.photo?.url} 
                alt="Avatar"
            />
            <div className={styles.content}>
                <h1 className={styles.name}>
                    {author.name}
                </h1>
                <p className={styles.bio}>
                    {author.bio}
                </p>
            </div>
        </div>
    )
}

export default AuthorCard