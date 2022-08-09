// * react
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import {IComment} from 'models/models'

// * serices
import { getComments } from 'services/commentApi';

// * styles 
import styles from './Comments.module.scss'

const Comments = ({ slug }: { slug: string }) => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getComments(slug).then((result: IComment[]) => {
            setComments(result);
        });
    }, []);

    return (
        <>
            {comments.length > 0 
            && (
                <div className={styles.comments}>
                    <h3 className={styles.totalComments}>
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                    {
                        comments.map((comment, index) => (
                            <div key={index} className={styles.comment}>
                                <div className="mb-4">
                                    <span className={styles.commentAuthor}>
                                        {comment.name}
                                    </span>
                                    <span>
                                        {' '}
                                        on
                                        {' '}
                                        {moment(comment.createdAt).format('MMM DD, YYYY')}
                                    </span>
                                </div>
                                <div className={styles.commentText}>
                                    {parse(comment.comment)}
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </>
    );
};

export default Comments;