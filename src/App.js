// Topic: Progressive Web App and Push Notification using firebase and deploy app on firebase

// link of this app => https://notificationapp-6c45d.web.app/

// run => npm install -g firebase-tools
// run => npm install firebase
// run in cmd => firebase login
// use cloud meassanging from firebase https://firebase.google.com/docs/cloud-messaging

import logo from './logo.svg';
import './App.css';
import { initNotification } from './Services/firebaseService';

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={initNotification}>Configure Notifications</button>
		</div>
	);
}

export default App;
