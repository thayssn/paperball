import { gql } from 'graphql-request';

export const getThingsQuery = () => gql`
  {
    things {
      id
      code
    }
  }
`

export const getThingByIdQuery = (id) => gql`
  {
    thing(where: { id: "${id}") {
      id
      label
      slug
    }
  }
`