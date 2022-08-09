// * react/next 
import {NextPage} from 'next'
import {IPostsProps} from 'models/models'

// * services
import { getCategories, getCategoryPost } from 'services/categoryApi';

// * components
import Category from 'components/screens/Category';

const CategoryPage: NextPage<IPostsProps> = ({posts}) => {
    return <Category posts={posts}/>
}

export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);
    return {
        props: { posts },
    };
}
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }: { slug: string }) => ({ params: { slug } })),
        fallback: true,
    };
}

export default CategoryPage