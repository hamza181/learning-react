const { ApolloServer, gql } = require('apollo-server');

const students = [
	{
		id: 1,
		name: 'Hamza',
		email: 'ameer.hamza1811@gmail.com',
		age: 22
	},

	{
		id: 2,
		name: 'Huzaifa',
		email: 'huzaifa.ahmed1811@gmail.com',
		age: 21
	},

	{
		id: 3,
		name: 'Hanzala',
		email: 'hanzala.ahmed181@gmail.com',
		age: 18
	}
];

// Resolver

const resolvers = {
	Query: {
		students: () => students
	}
};

const typeDefs = gql`
	type Student {
		id: Int
		name: String
		email: String
		age: Int
	}

	type Query {
		students: [Student]
	}
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

// to run this file type in cmd => node index.js

// run this in localhost 
// {
//   students{
//     name
//     email
//   }
// }