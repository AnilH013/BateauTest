<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/auth/login', {
          email: this.email,
          password: this.password,
        })
        localStorage.setItem('access_token', response.data.access_token)
        this.$router.push('/dashboard')
      } catch (error) {
        this.error = error.response.data.message
      }
    },
  },
}
</script>

<style>
.error {
  color: red;
}
</style>
