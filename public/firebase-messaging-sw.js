// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBrlHtR_T7iJC_tr_5aDW1ZcyTwltbkSDI",
    authDomain: "sritel-notification-system.firebaseapp.com",
    projectId: "sritel-notification-system",
    storageBucket: "sritel-notification-system.firebasestorage.app",
    messagingSenderId: "277611185677",
    appId: "1:277611185677:web:8fb259aef113c7cefdf744",
    measurementId: "G-Y8RT701BV9"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notificationTitle;
    const notificationOptions = {
      body: payload.notificationOptions.body,
      icon: '/icon.jpg'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });