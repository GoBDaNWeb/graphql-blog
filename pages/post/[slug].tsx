// * react/next
import { NextPage } from 'next'
import {useRouter} from 'next/router'
import {IPostProps} from 'models/models'

// * services 
import {getPostDetails, getPosts} from 'services/postApi'

// * components 
import Post from 'components/screens/Post'

const PostPage: NextPage<IPostProps> = ({post}) => {
    const router = useRouter();
    if (router.isFallback) {
      return <div>loading</div>;
    }
    return <Post post={post}/>
}

// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}

export async function getStaticPaths() {
const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}
export default PostPage