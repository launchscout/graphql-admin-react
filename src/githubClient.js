
const githubToken = "redacted";

let networkInterface = createNetworkInterface('https://api.github.com/graphql');
const client = new ApolloClient({
  // networkInterface: createNetworkInterface('http://localhost:53441/')
  networkInterface
  // networkInterface: createNetworkInterface('http://localhost:4000/graphql')
  // networkInterface: createNetworkInterface('https://www.graphqlhub.com/graphql')
});
// const client = new ApolloClient({
//   networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql' }),
// });
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = `bearer ${githubToken}`;
    next();
  }
}]);
