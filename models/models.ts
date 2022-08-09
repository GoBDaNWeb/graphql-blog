type url = {
    url: string
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

interface IPostNode {
    node: IPost
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
    post: IPostNode
}

export interface IPostsProps {
    posts: IPostNode[]
}

export interface IAuthorProps {
    author: IAuthor
}