<script setup>
import CardSkeleton from './components/CardSkeleton.vue';
import Products from './components/Products.vue';
import TableSkeleton from './components/TableSkeleton.vue';
import UsersTable from './components/UsersTable.vue';

</script>

<template>
  <main class="container my-4">
    <h1>Probando Axios</h1>
    <Suspense>
      <!-- Slot de componente con dependencia asíncrona -->
      <UsersTable />

      <!-- Slot fallback -> Mostrar algo mientras se cargan las dependencias asíncronas -->
      <template #fallback>
        <TableSkeleton />
      </template>
    </Suspense>

    <hr class="my-5">

    <Suspense>
      <Products />

      <template #fallback>
        <CardSkeleton />
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
