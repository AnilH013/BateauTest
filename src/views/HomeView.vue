<template>
  <div class="home">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/product">Produit</router-link></li>
          <li><router-link to="/contact">dashboard</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      Le projet fonctionne
      <br />Exercice 3 : Récupération des données via API<br />
      <div>
        <h1>Liste des produits</h1>
        <div class="card-list">
          <div
            v-for="product in products"
            :key="product.id"
            @click="$event => afficherDetail(product.id)"
            class="card"
          >
            <div class="card-body">
              <h2 class="card-title">{{ product.name }}</h2>
              <p></p>
              <p></p>
              <p>Cliquez pour afficher les détails</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '../store/index'
import axios from 'axios'

export default defineComponent({
  name: 'HomeView',
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

  methods: {
    afficherDetail(id: any) {
      this.$router.push(`/product/${id}`)
    },
  },
})
</script>

<style>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  top: 0;
  position: sticky;
  min-height: 50px;
  background: hwb(190 5% 13% / 0.927);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

nav ul {
  display: flex;
  list-style-type: none;
}

nav li {
  margin-right: 20px;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: helvetica;
}
#app {
  height: 100%;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  width: calc(33.33% - 1rem);
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

p {
  margin: 0;
}
</style>
