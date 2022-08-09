import {request, gql} from 'graphql-request'

const graphqlAPI: string | undefined = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name,
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query)

    return result.categories
}


export const getCategoryPost = async (slug: string) => {
    const query = gql`
        query GetCategoryPost($slug: String!) {
            postsConnection(where: {categories_some: {slug: $slug}}) {
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
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
}; 
