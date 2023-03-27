<template>
  <div class="card-list">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{ store_products.name }}</h2>
        <p class="card-text">
          <strong>unit:</strong> {{ store_products.unit }}
        </p>
        <p class="card-text"><strong>id:</strong> {{ store_products.id }}</p>
        <p class="card-text">
          <strong>price:</strong> {{ store_products.price }}
        </p>
        <p class="card-text">
          <strong>category</strong> {{ store_products.category }}
        </p>
        <p class="card-text">
          <strong>availability</strong> {{ store_products.availability }}
        </p>
        <p class="card-text">
          <strong>comments:</strong> {{ store_products.comments }}
        </p>
        <button
          class="btn btn-primary"
          @click="navigateToUpdate(store_products.id)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import store from '@/store'

export default defineComponent({
  name: 'ProductDetail',
  components: {},
  computed: {
    store_products() {
      return store.state.fish.find(
        fish => fish.id.toString() === this.$route.params.id
      )
    },
  },
  methods: {
    navigateToUpdate(productid: number) {
      this.$router.push({ name: 'update', params: { id: String(productid) } })
    },
  },

  /* data() {
    return {
      details_product: [],
    }
  },
   mounted() {
    axios
      .get(
        'http://localhost:8080/tig/product/' +
          this.$route.params.id +
          '/?format=json'
      )
      .then(response => {
        this.details_product = response.data
      })
      .catch(error => {
        console.error(error)
      })
  },
  */
})
</script>
