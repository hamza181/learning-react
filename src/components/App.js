// Topic: GraphQL
// make a folder for server side app
// client side work on this react app
// https://www.apollographql.com/docs/react/

import client from '../config/gql_config';
import { ApolloProvider } from '@apollo/client/react';
import Students from './Students';

function App() {
	return (
		<ApolloProvider client={client}>
			{/* <div>
				<h2>Hamza</h2>
			</div> */}
			<Students />
		</ApolloProvider>
	);
}

export default App;
