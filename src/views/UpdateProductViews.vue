<template>
  <div class="update">
    <header></header>
    <main>
      <form @submit.prevent="update">
        <p>Update {{ storeProduct.name }}</p>

        <label for="category">Category :</label>
        <select id="category" name="category" v-model="category">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label for="price">Price :</label>
        <input type="text" id="price" name="price" v-model.number="price" />

        <label for="unit">Unit :</label>
        <input type="text" id="unit" name="unit" v-model="unit" />

        <label for="availability">Availability :</label>
        <input
          type="checkbox"
          id="availability"
          name="availability"
          v-model="availability"
        />

        <label for="sale">Sale :</label>
        <input type="checkbox" id="sale" name="sale" v-model="sale" />

        <label for="discount">Discount :</label>
        <input
          type="text"
          id="discount"
          name="discount"
          v-model.number="discount"
        />

        <label for="comments">Comments :</label>
        <input type="text" id="comments" name="comments" v-model="comments" />

        <label for="owner">Owner :</label>
        <input type="text" id="owner" name="owner" v-model="owner" />

        <button type="submit">Envoyer</button>
      </form>
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import store from '../store/index'

export default {
  name: 'UpdateProductView',
  data() {
    return {
      name: '',
      category: '',
      price: '',
      unit: '',
      availability: false,
      sale: false,
      discount: '',
      comments: '',
      owner: '',
    }
  },
  computed: {
    storeProduct() {
      return (
        store.state.fish.find(
          fish => fish.id.toString() === this.$route.params.id
        ) || {}
      )
    },
    titlePage() {
      return `Update - ${this.storeProduct.name}`
    },
  },
  created() {
    if (!this.storeProduct) {
      console.error('Product not found (page update).')
      // rediriger l'utilisateur vers la page d'accueil ou la liste des produits
    }
    document.title = this.titlePage
  },
  methods: {
    ...mapMutations(['updateProduct']),
    update() {
      try {
        this.updateProduct({
          name: this.storeProduct.name,
          id: this.storeProduct.id,
          category: Number(this.category),
          price: Number(this.price),
          unit: this.unit,
          availability: this.availability,
          sale: this.sale,
          discount: Number(this.discount),
          comments: this.comments,
          owner: this.owner,
        })

        // Rediriger l'utilisateur vers la page de détails du produit mis à jour
        this.$router.push({
          name: 'detail',
          params: { id: this.storeProduct.id },
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
