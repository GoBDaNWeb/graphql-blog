// * react/next 
import React from 'react'
import {IPostProps} from 'models/models'
import moment from 'moment'

// * styles 
import styles from './PostDetail.module.scss'

const PostDetail: React.FC<IPostProps> = ({post}) => {
    const getContentFragment = (index: number, text: string, obj: any, type?: string) => {
        let modifiedText: any = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
        
            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }
        
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }
    
        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item: string, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item: string, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item: string, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className={styles.postDetail}>
            <div 
                className={styles.imageWrapper}
            >
                <img 
                    className={styles.image}
                    src={post.featuredImage.url} 
                    alt="Post Image"
                />
            </div>
            <div className={styles.content}>
                <h3>{post.title}</h3>
                <div className={styles.info}>
                    <div className={styles.author}>
                        <img 
                            className={styles.avatar}
                            src={post.author.photo?.url}
                            alt="Avatar"
                        />
                        <h5>
                            {post.author.name}
                        </h5>
                    </div>
                    <div>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                <div className={styles.content}>
                    {post.content.raw.children.map((typeObj: any, index: number) => {
                        const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostDetail