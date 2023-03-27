<template>
  <div id="dashboard"></div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashBoard',
  components: {},
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/tig/products/?format=json')
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        console.error(error)
      })
  },
})
</script>

<style></style>
