// copy from this site https://www.apollographql.com/docs/react/get-started/

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	// paste link of our server at which our server app is running
    // server app should be running
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache()
});

export default client;
