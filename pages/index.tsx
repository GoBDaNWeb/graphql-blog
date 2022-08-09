// * react/next 
import { NextPage } from 'next'
import {IPostsProps} from 'models/models'

// * screens
import {getPosts} from 'services/postApi'

// * components
import Main from 'components/screens/Main'

const MainPage: NextPage<IPostsProps> = ({posts}) => {
	return <Main posts={posts}/>
}

export async function getStaticProps() {
	const posts = (await getPosts()) || []
	
	return {
		props: {posts}
	}
}
export default MainPage
