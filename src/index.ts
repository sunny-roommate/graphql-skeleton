import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello: String
		meow: String
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello: () => "Hello world!",
		meow: () => "Meow",
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const app: any = express();

server.start().then(() => {
	server.applyMiddleware({ app });
	app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
});
