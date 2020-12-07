import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckiel2yw77wz901z3bi93afj1/master',
  fetch,
});