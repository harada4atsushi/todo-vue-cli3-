<template>
  <div id="ramens">
    <div v-for="ramen in ramens">
      <img :src="ramen.imageUrl" />
      <p>{{ramen.body}}</p>
    </div>
  </div>
</template>

<script>
import db from '../firestore.js'

export default {
  name: 'ramens',
  data() {
    return {
      ramens: []
    }
  },
  mounted() {
    db.collection('ramens').get().then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.ramens = array
      console.log(this.ramens[0].body)
    });
  }
}

</script>

<style>
img {
  width: 200px;
}
</style>
