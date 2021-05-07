importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

const firebaseConfig = {
	apiKey: 'AIzaSyC6PoBuPulejTS3oOuUcmifksxDzc__5BE',
	authDomain: 'notificationapp-6c45d.firebaseapp.com',
	projectId: 'notificationapp-6c45d',
	storageBucket: 'notificationapp-6c45d.appspot.com',
	messagingSenderId: '355362549728',
	appId: '1:355362549728:web:fdf320a86670ff1f598585'
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
