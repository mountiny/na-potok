import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckbwg9i6h01rw01xt4iem5jje/master',
  fetch,
});