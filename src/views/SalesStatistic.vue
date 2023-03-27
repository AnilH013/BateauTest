<template>
  <div id="sales"></div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SalesStatistic',
  components: {},
  async created() {
    const { data } = await axios.get(
      'http://localhost:8080/tig/products/?format=json'
    )
  },
})
</script>

<style></style>
