<script setup>
import { ref } from 'vue'
import apiReqRes from '@/api/apiReqRes'

const users = ref([])
const errorMessage = ref(null)




const fetchUsers = async () => {
  try {
    const response = await apiReqRes.get('/users')
    console.log(response)
    users.value = response.data.data
  } catch (error) {
    errorMessage.value = error.message
    console.log(error.message)
  }
}

// Un await en la raiz del componente, lo transforma en una dependencia asincrona
await fetchUsers()
</script>

<template>
  <div v-if="errorMessage">
    <h2>Error al obtener usuarios</h2>
    <p class="text-danger">{{ errorMessage }}</p>
  </div>
  <div class="my-4" v-else>
    <h2>Usuarios de api ReqRes</h2>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td><img :src="user.avatar" :alt="`Imagen de ${user.first_name} ${user.last_name}`" width="50"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>