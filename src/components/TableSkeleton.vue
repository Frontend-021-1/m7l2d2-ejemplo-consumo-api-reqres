<script setup>

</script>

<template>
  <div class="placeholder-glow my-4">
    <h2><span class="placeholder" style="width: 25%;"></span></h2>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col"><span class="placeholder col-12 placeholder-sm"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder-sm"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder-sm"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder-sm"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder-sm"></span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in 4">
          <th scope="col"><span class="placeholder col-12 placeholder"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder"></span></th>
          <th scope="col"><span class="placeholder col-12 placeholder"></span></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>