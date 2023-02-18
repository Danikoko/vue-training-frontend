import { defineStore } from 'pinia';

const useInventoryStore = defineStore('inventory', {
    state: () => ({ 
        totalLaptops: 0,
        pricePerLaptop: 250000
    }),
    getters: {
        totalLaptopPrices: (state) => state.totalLaptops * state.pricePerLaptop,
    },
    actions: {
        addLaptop() {
            this.totalLaptops++;
        },
    }
});

export default useInventoryStore;