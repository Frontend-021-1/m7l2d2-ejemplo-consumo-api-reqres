<script setup>
import { ref } from 'vue'
import apiReqRes from '@/api/apiReqRes';

const products = ref([])
const errorMessage = ref(null)

const fetchProducts = async () => {
  try {
    const response = await apiReqRes.get('/products')
    products.value = response.data.data
  } catch (error) {
    errorMessage.value = error.message
  }
}

await fetchProducts()
</script>

<template>
  <div>
    <h2>Productos de api ReqRes</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card" :style="{ backgroundColor: product.color }">
          <div class="card-body">
            <h5 class="card-title text-capitalize">{{ product.name }}</h5>
            <p class="card-text">{{ product.pantone_value
            }} - {{ product.year }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>