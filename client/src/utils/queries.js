import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      trips {
        tripId
        name
        destination
        description
        img_url
        highlights
      }
    }
  }
`;