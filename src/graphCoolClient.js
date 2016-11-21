
import ApolloClient, { createNetworkInterface } from 'apollo-client';
const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/civrfq8yh191j0130bludujyq')

const client = new ApolloClient({ networkInterface });

export default client;
