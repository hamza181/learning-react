import firebase from 'firebase';

//  copy from firebase project setting > General > SDK setup and configuration > Config

const firebaseConfig = {
	apiKey: 'AIzaSyC6PoBuPulejTS3oOuUcmifksxDzc__5BE',
	authDomain: 'notificationapp-6c45d.firebaseapp.com',
	projectId: 'notificationapp-6c45d',
	storageBucket: 'notificationapp-6c45d.appspot.com',
	messagingSenderId: '355362549728',
	appId: '1:355362549728:web:fdf320a86670ff1f598585'
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

//  make function which request a permission from browser

export function initNotification() {
	Notification.requestPermission().then((permission) => {
		console.log(permission);

		// agar permission mil jae to ye karo

		if (permission === 'granted') {
			// copy code from https://firebase.google.com/docs/cloud-messaging/js/client
			messaging
				.getToken()
				.then((currentToken) => {
					if (currentToken) {
						console.log('Token => ', currentToken);
					} else {
						console.log('No registration token available. Request permission to generate one.');
					}
				})
				.catch((err) => {
					console.log('An error occurred while retrieving token. ', err);
				});
		}
	});
}
