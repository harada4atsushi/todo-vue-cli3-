<template>
  <div id="ramens">
    ramenramenramen
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

require('firebase/database');

export default {
  name: 'ramens',
    components: {}
}

var app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
});

const firestore = app.firestore()
firestore.settings({ timestampsInSnapshots: true })

// export default firestore

var db = firebase.firestore();
db.collection("ramens").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

</script>

<style>
</style>
