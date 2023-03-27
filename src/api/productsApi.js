const API_URL = 'http://51.255.166.155:1352/tig'

export const getProducts = () => {
  return fetch(`${API_URL}/products/`)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}
