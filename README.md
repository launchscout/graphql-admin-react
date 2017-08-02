# graphl-admin-react

This is a rewrite of [graphql-admin](https://github.com/gaslight/graphql-admin) in React. So far, basic queries and mutations including arguments
are working. InputObjects are also working. In fact at this point it's probably safe to say
the react based version is farther along and more likely to be what I'll pursue going forward.

The only thing it doesn't support (that the previous version did)is mutations and queries that live
in nested fields like on GraphqlHub. This is a lot of trouble and seems like a bit of an edge case and so I may not worry about it. PRs welcome of course :)

It's probably time to say this is an actual thing and start tracking issues.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Usage

```
npm install
npm start
```

## GraphCool

I've been using [GraphCool](http://graph.cool) to play around with creating a GraphQL schema to test 
against. Right now this is configured in src/graphqlCoolClient.js. It's easy enough
to create GraphCool project and try it out, just change the endpoint.
