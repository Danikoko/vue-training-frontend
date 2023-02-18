<template>
  <div>
    <h1>WELCOME TO THE HOME PAGE</h1>
    <h2>Price Per Laptop: {{ pricePerLaptop }}</h2>
    <h2>Total Laptops: {{ totalLaptops }}</h2>
    <h2>Total Laptop Prices: {{ totalLaptopPrices }}</h2>
    <button @click="addLaptop()">Add Laptop</button>
  </div>
</template>

<script>
import useInventoryStore from '../store/inventory';
import { mapState, mapActions } from 'pinia';
export default {
  computed: {
    ...mapState(useInventoryStore, [
      'totalLaptops',
      'pricePerLaptop',
      'totalLaptopPrices'
    ])
  },
  methods: {
    ...mapActions(useInventoryStore, [
      'addLaptop'
    ])
  }
}
</script>

<style>

</style>