type url = {
    url: string
}

interface IPostNode {
    node: IPost
}

interface IAuthor {
    bio: string,
    id: string,
    name: string,
    photo?: url
}

interface IPost {
    author: IAuthor,
    categories: ICategory[],
    createdAt: string,
    exerpt: string,
    content: any,
    featuredImage: url,
    slug: string,
    title: string
}

export interface ICategory {
    name: string,
    slug: string
}

export interface IComment {
    name: string,
    createdAt: string,
    comment: string
}

export interface IPostProps {
    post: IPost
}

export interface IPostsProps {
    posts: IPostNode[]
}

export interface IAuthorProps {
    author: IAuthor
}