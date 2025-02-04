<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export default {
  name: "App",
  mounted() {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBrlHtR_T7iJC_tr_5aDW1ZcyTwltbkSDI",
      authDomain: "sritel-notification-system.firebaseapp.com",
      projectId: "sritel-notification-system",
      storageBucket: "sritel-notification-system.appspot.com",
      messagingSenderId: "277611185677",
      appId: "1:277611185677:web:8fb259aef113c7cefdf744",
      measurementId: "G-Y8RT701BV9",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Cloud Messaging
    const messaging = getMessaging(app);

    // Request permission and get FCM token
    getToken(messaging, {
      vapidKey: "BL1ZCs2u_KxnAQiBrX4EQrnba_xQ55aqvaruzHfqqwfwNCYm_56X2JNm3VLSISyjFNL4vYOu2PjtOfH85LL4eHM",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Firebase Token:", currentToken);
        } else {
          console.log("No registration token available.");
        }
      })
      .catch((err) => {
        console.error("An error occurred while retrieving the token.", err);
      });

    // Listen for messages
    onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      // Optionally, display the notification payload to the user
    });
  },
};
</script>
