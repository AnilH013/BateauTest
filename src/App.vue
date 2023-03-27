<template>
  <router-view />
</template>

<style>
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
</style>
