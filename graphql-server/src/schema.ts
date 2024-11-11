import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    quantity: Int
  }

  type Mutation {
    updateQuantity(newQuantity: Int!): Int
  }
`;
