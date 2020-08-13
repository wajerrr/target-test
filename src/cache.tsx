import { InMemoryCache, gql, makeVar } from '@apollo/client';

export const value1Var = makeVar('');

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                value1: {
                    read() { return value1Var(); }
                }
            }
        }
    }
});

export const FORM = gql`
  query Form {
    value1 @client
  }
`;