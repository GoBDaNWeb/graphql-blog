import {request, gql} from 'graphql-request'

const graphqlAPI: string | undefined = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        exerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

export const getPostDetails = async (slug: any) => {
    const query = gql`
		query GetPostDetails($slug : String!) {
			post(where: {slug: $slug}) {
			title
			featuredImage {
				url
			}
			author{
				name
				bio
				photo {
				url
				}
			}
			createdAt
			slug
			content {
				raw
			}
			categories {
				name
				slug
			}
			}
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.post;
};