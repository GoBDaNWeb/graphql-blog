
// * react/next 
import {useState, useEffect} from 'react'

// * services
import {submitComment} from 'services/commentApi'

// * styles 
import styles from './CommentForm.module.scss'

const CommentForm = ({ slug}: {slug: string}) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.target
        name === 'name' && setName(value)
        name === 'email' && setEmail(value)
        name === 'comment' && setComment(value)
    }

    const userAddComment = (): void => {
        setIsError(false);
        if (!name || !email || !comment) {
            setIsError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };
    
        submitComment(commentObj)
            .then((res) => {
                console.log(res)
                if (res.ok) {
                    setComment('');
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    };

    return (
        <div className={styles.commentForm}>
            <h3 >Leave a Reply</h3>
            <div>
                <input 
                    type='text'
                    value={comment} 
                    onChange={onInputChange}  
                    name="comment" 
                    placeholder="Comment" 
                />
            </div>
            <>
                <input 
                    type="text" 
                    value={name} 
                    onChange={onInputChange} 
                    placeholder="Name" name="name" />
                <input 
                    type="email" 
                    value={email} 
                    onChange={onInputChange} 
                    placeholder="Email" 
                    name="email" 
                />
            </>
            {
                isError 
                && (
                    <p className={styles.error}>
                        All fields are mandatory
                    </p>
                )
            }
            <div className={styles.btn}>
                <button onClick={userAddComment}>
                    Post Comment
                </button>
                {
                    showSuccessMessage 
                    && (
                        <span className={styles.success}>
                            Comment submitted for review
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default CommentForm