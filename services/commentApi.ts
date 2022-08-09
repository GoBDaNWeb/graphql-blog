import {request, gql} from 'graphql-request'

const graphqlAPI: string | undefined = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

  return result;
};

export const getComments = async (slug: string) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
            name
            createdAt
            comment
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
};